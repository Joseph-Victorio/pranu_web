import SideNav from '../components/admin/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Admin = () => {
  const [penyewa, setPenyewa] = useState([]);
  const [kontak, setKontak] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Atur paginationnya
  const [permission, setPermission] = useState([]);
  const navigate = useNavigate(); // Correctly initialize useNavigate

  // Fetch permissions and redirect if necessary
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/admin.php');
        setPermission(res.data.userAdmin);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses data admin");
      }
    };
    fetchAdmin();
  }, []);

  useEffect(() => {
    // Redirect if the user does not have permission
    const checkPermission = () => {
      const userHasAccess = permission.map(p => p.login === "TRUE");
      if (userHasAccess === 'FALSE') {
        navigate('/'); // Correctly use navigate function
      }
    };
    checkPermission();
  }, [permission, navigate]);

  // Fetch all penyewa data
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

  // Logic for displaying current products
  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentPenyewa = penyewa.slice(indexOfFirstProduct, indexOfLastProduct);
  const currentKontak = kontak.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic for handling page click
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Function to export data to Excel

  return (
    <div className="flex gap-5">
      <SideNav />
      <div className="font-rhodium text-primary xl:p-5 mt-2 w-full md:ml-[250px]">
        <p className="text-3xl p-5 mt-20 md:mt-5">Dashboard</p>
        <hr className="border-primary border-b-2" />
        {/* TABLE LIST */}
        <p className="text-3xl p-5 ">Penyewa</p>
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[800px] lg:overflow-x-scroll p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[900px] md:w-[750px] mx-auto '>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px]'>Penyewa</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6'>No Telepon</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px]'>Tanggal Sewa</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px]'>Tanggal Selesai</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6'>Alamat</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6'>Pesanan</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6'>Tanggal Pesan</th>
              </tr>
            </thead>
            <tbody>
              {currentPenyewa.map(penyewa => (
                <tr className='text-center' key={penyewa.id}>
                  <td className='p-2 text-sm w-[150px]'><p>{penyewa.nama}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{penyewa.telepon}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{new Date(penyewa.sewa).toLocaleDateString('id-ID')}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{new Date(penyewa.balik).toLocaleDateString('id-ID')}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{penyewa.alamat}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{penyewa.pesanan}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{new Date(penyewa.tgl_pesanan).toLocaleDateString('id-ID')}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-3xl p-5 ">Pengaduan & Pertanyaan</p>
        {/* TABLE LIST */}
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[800px] lg:overflow-x-scroll p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse w-[900px] md:w-[750px] mx-auto '>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px]'>Nama</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6'>Jenis Pesan</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px]'>Telemail</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px]'>Pesan</th>
              </tr>
            </thead>
            <tbody>
              {currentKontak.map(kontak => (
                <tr className='text-center' key={kontak.id}>
                  <td className='p-2 text-sm w-[150px]'><p>{kontak.nama}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{kontak.jenis_pesan}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{kontak.telemail}</p></td>
                  <td className='p-2 text-sm w-[150px]'><p>{kontak.pesan}</p></td>
                  
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
