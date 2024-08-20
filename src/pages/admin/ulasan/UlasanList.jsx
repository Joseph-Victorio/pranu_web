import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import toast from 'react-hot-toast';

import SideNav from '../../../components/admin/SideNav';

import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";

const UlasanList = () => {
  const [ulasans, setUlasan] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10); // Set pagination

  const [permission, setPermission] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/admin.php');
        setPermission(res.data.userAdmin);
        const userHasAccess = res.data.userAdmin.some(p => p.login === "TRUE");
        if (!userHasAccess) {
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
    const fetchAllUlasan = async () => {
      try {
        const res = await axios.get("https://api.pranugumproduction.com/ulasan.php");
        setUlasan(res.data.ulasanData || []);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses data ulasan");
        setLoading(false); // Set loading to false if there's an error
      }
    };
    fetchAllUlasan();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://api.pranugumproduction.com/ulasan.php?id=' + id);
      toast.success("Berhasil Menghapus Ulasan!");
      setUlasan(ulasans.filter(ulasan => ulasan.id !== id)); // Update state without reloading
    } catch (error) {
      console.log(error);
      toast.error("Terjadi error saat menghapus ulasan");
    }
  };

  // Logic for displaying current ulasans
  const indexOfLastUlasan = (currentPage + 1) * itemsPerPage;
  const indexOfFirstUlasan = indexOfLastUlasan - itemsPerPage;
  const currentUlasans = ulasans.slice(indexOfFirstUlasan, indexOfLastUlasan);

  // Logic for handling page click
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
    <div className='flex gap-5 mt-20 sm:mt-0'>
      <SideNav />
      {/* KANAN */}
      <div className='font-rhodium text-primary xl:p-5 mt-2 w-full md:ml-[250px]'>
        <p className='text-3xl p-5'>List Ulasan</p>
        <hr className='border-primary border-b-2' />
        <Link
          to={'/admin/add-ulasan'}
          className='flex justify-end px-10'>
          <p className='mt-3 bg-primary text-secondary px-6 py-2 md:w-[200px] w-[200px] text-center rounded-md m-2'>
            Tambah Ulasan
          </p>
        </Link>

        {/* TABLE LIST */}
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:w-[1000px] xl:overflow-hidden lg:overflow-x-scroll p-3 mx-auto'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[750px] md:w-[900px] mx-auto'>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px] border-r-2 border-primary'>foto</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 border-r-2 border-primary'>Nama</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] border-r-2 border-primary'>Ulasan</th>
                <th className='bg-secondary rounded-r-md p-2 md:text-[14px] md:px-6'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentUlasans.map(ulasan => (
                <tr className='text-center' key={ulasan.id}>
                  <td className='p-2 border-r-2 border-primary w-[150px]'>
                    <img src={ulasan.foto === 0 ? '/logo_login.png' : 'https://api.pranugumproduction.com/' + ulasan.foto} alt="" />
                  </td>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'>
                    <p>{ulasan.nama}</p>
                  </td>
                  <td className='mt-5 px-2 border-r-2 border-primary w-[500px]'>
                    <p className='line-clamp-2'>{ulasan.ulasan}</p>
                  </td>
                  <td className='p-2'>
                    <div className='flex gap-2 justify-center'>
                      <Link to={`/admin/edit-ulasan/${ulasan.id}`} className='bg-primary p-2 rounded-md'>
                        <FaPencil className='text-secondary'/>
                      </Link>
                      <button className='bg-primary p-2 rounded-md' onClick={() => handleDelete(ulasan.id)}>
                        <BsTrash className='text-secondary' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className='border-b-2 border-primary mt-5 mx-9'/>
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(ulasans.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-between w-[300px] mt-5 text-secondary bg-primary rounded-md p-1 px-4 md:ml-12 ml-5"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default UlasanList;
