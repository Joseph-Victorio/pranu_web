import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";
import toast from "react-hot-toast";

const ProdukDetail = () => {
  const [detail, setDetail] = useState({});
  const [terkait, setTerkait] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`https://api.pranugumproduction.com/produk.php?id=${id}`);
        setDetail(res.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, [id]);

  useEffect(() => {
    const fetchTerkait = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/produk.php');
        setTerkait(res.data.produkData || []); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchTerkait();
  }, []);

  const formatCurrencyIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const [deskripsi, setDeskripsi] = useState(true);
  const onClickDesc = () => {
    setDeskripsi(true)
    setKetentuan(false);
  };

  const [ketentuan, setKetentuan] = useState(false);
  const onClickKetentuan = () => {
    setKetentuan(true);
    setDeskripsi(false);
  };

  const [jumlah, setJumlah] = useState(1);
  const tambah = () => {
    setJumlah(jumlah + 1);
  };
  const kurang = () => {
    if (jumlah >= 2) {
      setJumlah(jumlah - 1);
    }
  };

  const onClickToCart = () => {
    const cart = {
      nama_produk: detail.nama_produk,
      foto: detail.foto,
      jumlah: jumlah,
      harga: detail.harga
    };
    localStorage.setItem(detail.nama_produk, JSON.stringify(cart));
    toast.success('Produk berhasil ditambahkan ke keranjang!');
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div>
      <Navbar />
      {/* ATAS */}
      <div className="flex flex-col xl:flex-row items-center gap-5 p-5 font-rhodium xl:gap-10">
        {/* KIRI */}
        <div key={detail.id}>
          <div className="md:w-[375px] md:h-[375px] border-2 border-primary rounded-[30px] p-5 bg-white">
            <img
              src={`https://api.pranugumproduction.com/${detail.foto}`}
              alt={detail.nama_produk}
              className="rounded-[15px] shadow-md md:w-[350px] mx-auto"
            />
          </div>
          <div className="flex items-center gap-5">
            <p className="text-[24px] xl:text-[36px] md:text-[24px] mt-5 text-primary">
              Share :
            </p>
            {/* WA */}
            <div>
              <a
                className=""
                href={`https://api.whatsapp.com/send?text=https://pranugumproduction.com/produk/${detail.id}`}
              >
                <img
                  src="/icons/whatsapp.svg"
                  alt=""
                  className="w-[40px] xl:w-[60px] md:w-[45px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* KANAN */}
        <div className="flex flex-col flex-1">
          <p className="text-[30px] md:text-[40px] text-primary ">
            {detail.nama_produk}
          </p>
          <p className="text-tersier">Kategori: {detail.kategori}</p>
          <p className="text-[24px] md:text-[36px] text-secondary md:mt-5">
            {formatCurrencyIDR(detail.harga)}
            <span className="text-gray-500 font-normal">/hari</span>
          </p>

          {/* deskripsi */}
          <div className="flex">
            <p
              className={
                deskripsi
                  ? "text-primary text-[18px] md:text-[36px] border-b-2 border-secondary w-[100px] md:w-[200px] text-center cursor-pointer"
                  : "text-primary text-[18px] md:text-[36px] border-b-2 border-primary w-[100px] md:w-[200px] text-center cursor-pointer"
              }
              onClick={onClickDesc}
            >
              Deskripsi
            </p>
            <p
              className={
                ketentuan
                  ? "text-primary text-[18px] md:text-[36px] border-b-2 border-secondary cursor-pointer w-[225px] md:w-[400px] text-center"
                  : "text-primary text-[18px] md:text-[36px] border-b-2 border-primary cursor-pointer w-[225px] md:w-[400px] text-center"
              }
              onClick={onClickKetentuan}
            >
              Ketentuan Produk
            </p>
          </div>
          <div className="text-justify p-1 h-[150px] md:h-auto overflow-y-scroll md:overflow-hidden mt-5">
            {deskripsi && (
             <div dangerouslySetInnerHTML={{ __html: detail.deskripsi }} />
            )}
            {ketentuan && (
              <div dangerouslySetInnerHTML={{ __html: detail.ketentuan }} />
            )}
          </div>
          {/* tombol tambah */}
          <div className="flex gap-5 items-center mt-5">
            <div className="flex items-center border-primary border-2 rounded-3xl w-[120px] md:w-[170px] justify-between">
              <button
                onClick={kurang}
                className="text-primary cursor-pointer md:text-4xl text-3xl"
              >
                <IoIosRemoveCircle />
              </button>
              <div className="user-select-none">
                <p className="md:text-4xl text-3xl user-select-none">{jumlah}</p>
              </div>
              <button
                onClick={tambah}
                className="text-primary cursor-pointer md:text-4xl text-3xl"
              >
                <IoMdAddCircle />
              </button>
            </div>
            <button
              className="text-white bg-primary rounded-[40px] px-6 py-2 text-[24px]"
              type="button"
              onClick={onClickToCart}
            >
              Tambahkan
            </button>
          </div>
        </div>
      </div>
      {/* BAWAH */}
      <hr className="border-2 mb-5 border-gray-400" />
      <p className="text-primary text-[24px] md:text-[36px] p-5">Produk Terkait</p>
      <div className="flex overflow-x-scroll gap-5 p-5 mb-5">
        {terkait.map((ter) => (
          <div
            key={ter.id}
            className="w-[152px] h-[220px] md:w-[289px] md:h-[420px] xl:w-[280px] gap-5 rounded-[15px] md:rounded-[30px] border-2 border-primary p-2 bg-white mx-auto"
          >
            <div className="sm:w-[237px] w-[237px] mx-auto">
              <img
                src={`http://localhost/api/${ter.foto}`}
                alt=""
                className="w-[132px] h-[117.89px] md:w-[237px] md:h-[216px] rounded-[15px]"
              />
            </div>
            <div className="w-[237px] mx-auto">
              <p className="text-tersier text-[8px] md:text-[14px] mt-2 md:mt-4">
                {ter.kategori}
              </p>
              <p className="text-[10px] md:text-[18px] text-primary mt-1">
                {ter.nama_produk}
              </p>
              <p className="text-secondary text-[10px] md:text-[18px] mt-1">
                Rp {ter.harga}
                <span className="text-tersier">/hari</span>
              </p>
              <a href={`/produk/${ter.id}`}>
                <button className="bg-primary rounded-full w-[133px] h-[18px] md:w-[237px] md:h-[38px] text-white text-[10px] md:mt-8 md:text-[14px]">
                  Tambahkan
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProdukDetail;
