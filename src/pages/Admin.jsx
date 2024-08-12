import SideNav from '../components/admin/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MdChevronRight } from "react-icons/md";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [penyewa, setPenyewa] = useState([]);
  const [kontak, setKontak] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [permission, setPermission] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/admin.php');
        setPermission(res.data.userAdmin);
        const cek = res.data.userAdmin.map(p => p.login);
        console.log(cek);
        if (cek[0] === "FALSE") {
          navigate('/');
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses data admin");
        setLoading(false);
      }
    };
    fetchAdmin();
  }, [navigate]);

  useEffect(() => {
    const fetchAllPenyewa = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/penyewa.php');
        setPenyewa(res.data.penyewa);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses tampilan penyewa");
      }
    };
    fetchAllPenyewa();
  }, []);

  useEffect(() => {
    const fetchAllKontak = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/kontak.php');
        setKontak(res.data.kontak);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses tampilan penyewa");
      }
    };
    fetchAllKontak();
  }, []);

  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentPenyewa = penyewa.slice(indexOfFirstProduct, indexOfLastProduct);
  const currentKontak = kontak.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src="/logo/PRANUGUMBiruPutih.png" alt="Logo" className="w-full max-w-xs mx-auto my-auto" />
      </div>
    );
  }

  return (
    <div className="flex gap-5">
      <SideNav />
      <div className="font-rhodium text-primary xl:p-5 w-full md:ml-[250px]">
        <p className="text-3xl p-2 ">Dashboard</p>
        <hr className="border-primary border-b-2" />
        <p className="text-3xl p-2 mt-2">Data Penyewa</p>
        <div className="text-tersier flex justify-end px-8 items-center">
          <a href='/admin/penyewa'>Lihat Semua </a>
          <MdChevronRight />
        </div>
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[1000px] lg:overflow-x-scroll p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[900px] md:w-[950px] mx-auto xl:mx-0'>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px] border-r-2 border-primary'>No</th>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px] border-r-2 border-primary'>Penyewa</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 border-r-2 border-primary'>No Telepon</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6  border-r-2 border-primary'>Tanggal Sewa</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6  border-r-2 border-primary'>Tanggal Selesai</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 border-r-2 border-primary'>Alamat</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 border-r-2 border-primary'>Pesanan</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 rounded-r-md'>Tanggal Pesan</th>
              </tr>
            </thead>
            <tbody>
              {currentPenyewa.map((penyewa, index) => (
                <tr className='text-center' key={penyewa.id}>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{index + 1 + currentPage * itemsPerPage}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{penyewa.nama}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{penyewa.telepon}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{penyewa.sewa}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{penyewa.balik}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{penyewa.alamat}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{penyewa.pesanan}</p></td>
                  <td className='p-2 text-sm '><p>{penyewa.tgl_pesanan}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-3xl p-2 mt-2 "> Data Pertanyaan dan Pengaduan</p>
        <div className="text-tersier flex justify-end px-8 items-center">
          <a href='/admin/pertanyaan-pengaduan'>Lihat Semua </a>
          <MdChevronRight />
        </div>
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[1000px] lg:overflow-x-scroll p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse w-[950px] mx-auto xl:mx-0'>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px] border-r-2 border-primary'>No</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 border-r-2 border-primary'>Nama</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6  border-r-2 border-primary'>Jenis Pesan</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6  border-r-2 border-primary'>Telemail</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 rounded-r-md'>Pesan</th>
              </tr>
            </thead>
            <tbody>
              {currentKontak.map((kontak, index) => (
                <tr className='text-center' key={kontak.id}>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{index + 1 + currentPage * itemsPerPage}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{kontak.nama}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{kontak.jenis_pesan}</p></td>
                  <td className='p-2 text-sm  border-r-2 border-primary'><p>{kontak.telemail}</p></td>
                  <td className='p-2 text-sm '><p>{kontak.pesan}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
