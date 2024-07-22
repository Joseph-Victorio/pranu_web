import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MdDeleteForever } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import axios from "axios";
import toast from "react-hot-toast";

const KeranjangBelanja = () => {
  const [barang, setBarang] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [daysDifference, setDaysDifference] = useState(0);

  useEffect(() => {
    const fetchItems = () => {
      const storageItems = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        try {
          const parsedValue = JSON.parse(value);
          storageItems.push({
            key,
            value: { ...parsedValue, jumlah: parsedValue.jumlah || 1 }
          });
        } catch (error) {
          console.error("Parsing error on", key, value);
          storageItems.push({ key, value });
        }
      }
      setBarang(storageItems);
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const calculateTotalSum = () => {
      const sum = barang.reduce((acc, item) => {
        return acc + item.value.jumlah * item.value.harga;
      }, 0);
      setTotalSum(sum);
    };

    calculateTotalSum();
  }, [barang]);

  const keranjangKu = barang.map(bar => `${bar.value.jumlah} ${bar.value.nama_produk}`);

  const formatCurrencyIDR = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setBarang((prevBarang) => prevBarang.filter((item) => item.key !== key));
    toast.success('Barang Berhasil di hapus!')
  };

  const handleTambah = (key) => {
    setBarang((prevBarang) => {
      const updatedBarang = prevBarang.map((item) =>
        item.key === key
          ? { ...item, value: { ...item.value, jumlah: item.value.jumlah + 1 } }
          : item
      );
      updatedBarang.forEach((item) => {
        if (item.key === key) {
          localStorage.setItem(key, JSON.stringify(item.value));
        }
      });
      return updatedBarang;
    });
  };

  const handleKurang = (key) => {
    setBarang((prevBarang) => {
      const updatedBarang = prevBarang.map((item) =>
        item.key === key && item.value.jumlah > 1
          ? { ...item, value: { ...item.value, jumlah: item.value.jumlah - 1 } }
          : item
      );
      updatedBarang.forEach((item) => {
        if (item.key === key) {
          localStorage.setItem(key, JSON.stringify(item.value));
        }
      });
      return updatedBarang;
    });
  };

  const [form, setForm] = useState({
    nama: '',
    telepon: '',
    sewa: '',
    balik: '',
    alamat: '',
    pesanan: '',
  });

  const onChangeHandle = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'sewa' || e.target.name === 'balik') {
      calculateDaysDifference(e.target.name === 'sewa' ? e.target.value : form.sewa, e.target.name === 'balik' ? e.target.value : form.balik);
    }
  };

  const calculateDaysDifference = (sewa, balik) => {
    if (sewa && balik) {
      const date1 = new Date(sewa);
      const date2 = new Date(balik);
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24) + 1);
      setDaysDifference(diffDays);
    }
  };

  const pesanHandelClick = async (e) => {
    e.preventDefault();
    try {
      setForm({
        sewa : form.sewa = new Date(form.sewa).toLocaleDateString('id-ID'),
        balik: form.balik = new Date(form.balik).toLocaleDateString('id-ID')
      })
      const updatedForm = {
        ...form,
        pesanan: keranjangKu.join(', '),
      };
      

      await axios.post('http://localhost/api/penyewa.php', updatedForm);
      setForm({
        nama: '',
        telepon: '',
        sewa: '',
        balik: '',
        alamat: '',
        pesanan: ''
      });
      setDaysDifference(0);

      window.location = daysDifference > 1
        ? `https://wa.me/6281295079288?text=Saya mau sewa ${keranjangKu.join(', ')} untuk ${daysDifference} hari, buat tanggal ${form.sewa} sampai tanggal ${form.balik}, apakah barang ready?`
        : `https://wa.me/6281295079288?text=Saya mau pesan ${keranjangKu.join(', ')} untuk ${daysDifference} hari, buat tanggal ${form.sewa}, apakah barang ready?`;

      localStorage.clear();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-2 py-2 md:px-10 md:py-5 font-rhodium">
        <img src="/keranjangBelanjaHeader.svg" alt="" />
        <div className="bg-white rounded-[14px] border-primary border-2 p-5 mt-5">
          <p className="text-[24px] md:text-[36px] text-primary m-2">
            Produk yang di sewa
          </p>
          {Array.isArray(barang) &&
            barang.map((bar) => (
              <div key={bar.key} className="mb-4 rounded-[14px]">
                {typeof bar.value === "object" && bar.value !== null ? (
                  <div className="flex gap-5 items-center justify-between rounded-[14px] shadow-md px-2 py-2 md:pr-5">
                    <div className="flex gap-5 items-center">
                      <img
                        src={`http://localhost/api/${bar.value.foto}`}
                        alt=""
                        className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-[14px] shadow-md"
                      />
                      <div className="flex flex-col justify-between rounded-[14px] border-r-2 border-gray-50 pr-1">
                        <div>
                          <p className="text-primary text-[20px]">
                            {bar.value.nama_produk}
                          </p>
                          <p className="text-red-500 text-[18px]">
                            {formatCurrencyIDR(bar.value.harga)}
                          </p>
                        </div>
                        <div className="flex gap-5 items-center w-[135px] md:w-[200px]">
                          <div className="flex items-center border-primary border-2 rounded-3xl w-[80px] md:w-[100px] justify-between">
                            <button
                              onClick={() => handleKurang(bar.key)}
                              className="text-primary cursor-pointer md:text-2xl text-xl"
                            >
                              <IoIosRemoveCircle />
                            </button>
                            <div className="user-select-none">
                              <p className="md:text-2xl text-xl user-select-none">
                                {bar.value.jumlah}
                              </p>
                            </div>
                            <button
                              onClick={() => handleTambah(bar.key)}
                              className="text-primary cursor-pointer md:text-2xl text-xl"
                            >
                              <IoMdAddCircle />
                            </button>
                          </div>
                          <button
                            className="text-red-500 md:text-4xl text-2xl"
                            onClick={() => handleDelete(bar.key)}
                          >
                            <MdDeleteForever />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-red-500 text-[10px] md:text-[15px]">
                      {formatCurrencyIDR(bar.value.jumlah * bar.value.harga)}
                    </p>
                  </div>
                ) : (
                  <p>Belum ada Produk di keranjang anda!</p>
                )}
              </div>
            ))}
        </div>
        {/* FORMULIR */}
        <form className="border-primary border-2 bg-white p-5 mt-5 rounded-[14px]">
          <p className="text-primary md:text-2xl">Formulir Penyewa</p>
          {/* NAMA */}
          <div className="flex flex-col xl:flex-row gap-5 ">
            <div className="flex-1 mx-auto md:mx-0 ">
              <div className="flex gap-1 text-primary ">
                <FaRegUser />
                <p>Nama</p>
              </div>
              <input
                type="text"
                name="nama"
                className="border-2 border-primary bg-gray-200 rounded-[7px] p-2 md:w-[539px]"
                placeholder="Nama"
                required
                onChange={onChangeHandle}
                value={form.nama}
              />
            </div>
            <div className="flex-1 mx-auto md:mx-0">
              <div className="flex gap-1 text-primary ">
                <MdOutlinePhone />
                <p>Nomor Telepon</p>
              </div>
              <input
                type="text"
                name="telepon"
                className="border-2 border-primary bg-gray-200 rounded-[7px] p-2 md:w-[539px]"
                placeholder="Nomor telepon"
                required
                onChange={onChangeHandle}
                value={form.telepon}
                maxLength={14}
              />
            </div>
          </div>
          <br />
          {/* tgl sewa */}
          <div className="flex flex-col xl:flex-row gap-5 ">
            <div className="flex-1 mx-auto md:mx-0 ">
              <div className="flex gap-1 text-primary ">
                <MdOutlineDateRange />
                <p>Tanggal Penyewaan</p>
              </div>
              <input
                type="date"
                name="sewa"
                className="border-2 border-primary bg-gray-200 rounded-[7px] p-2 w-[250px] md:w-[539px]"
                placeholder="Pilih Tanggal"
                required
                onChange={onChangeHandle}
                value={form.sewa}
              />
            </div>
            <div className="flex-1 mx-auto md:mx-0">
              <div className="flex gap-1 text-primary ">
                <MdOutlineDateRange />
                <p>Tanggal Pengembalian</p>
              </div>
              <input
                type="date"
                name="balik"
                className="border-2 border-primary bg-gray-200 rounded-[7px] p-2 w-[250px] md:w-[539px]"
                placeholder="Pilih Tanggal"
                required
                onChange={onChangeHandle}
                value={form.balik}
              />
            </div>
          </div>
          <div className="mx-auto md:mx-0 mt-5 w-[250px] xl:w-[1120px] ">
            <div className="flex gap-1 text-primary items-start ">
              <CiLocationOn />
              <p>Alamat</p>
            </div>
            <textarea
              type="text"
              name="alamat"
              className="border-2 border-primary bg-gray-200 rounded-[7px] p-2 w-[250px] xl:w-[1120px] md:w-[625px] md:h-[75px] "
              placeholder="Alamat anda"
              required
              onChange={onChangeHandle}
              value={form.alamat}
            />
          </div>
          <div className="mx-auto md:mx-0 mt-5 w-[250px] md:w-[1120px]">
          </div>
        </form>

        <br />
        {/* total pesanan */}
        <div className="border-[3px] border-primary rounded-[15px] bg-white">
          <div className="bg-secondary border-b-2 border-primary rounded-[10px] p-5">
            <p className="text-center text-primary md:text-[30px] text-[20px]">
              Total Pesanan
            </p>
          </div>
          <div className="p-5">
            <div className="mt-5">
              <p className="text-primary text-[18px] md:text-[24px]">
                Total Produk ({localStorage.length}): <span className="text-red-500">{formatCurrencyIDR(totalSum)}</span>
              </p>
              <p className="text-primary text-[18px] md:text-[24px]">
                Waktu Sewa: <span className="text-red-500">{daysDifference} hari</span> 
              </p>
              <p className="text-primary text-[18px] md:text-[24px]">
                Total Sementara: <span className="text-red-500">{formatCurrencyIDR(totalSum * daysDifference)}</span>
              </p>
            </div>
          </div>
          {/* tombol pesan */}
          <div className="p-5">
          <button 
            className="w-full bg-primary text-secondary px-6 py-2 rounded-xl"
            onClick={pesanHandelClick}>
                Pesan
          </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KeranjangBelanja;
