import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import toast from "react-hot-toast";
import SideNav from '../../../components/admin/SideNav';
import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";

const ArtikelList = () => {
  const [artikels, setArtikel] = useState([]);
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
    const fetchAllArtikel = async () => {
      try {
        const res = await axios.get("https://api.pranugumproduction.com/artikel.php");
        setArtikel(res.data.artikelData);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses data artikel");
      }
    };
    fetchAllArtikel();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://api.pranugumproduction.com/artikel.php?id=' + id);
      toast.success("Berhasil Menghapus Artikel!");
      setArtikel(prev => prev.filter(artikel => artikel.id !== id));
    } catch (error) {
      console.log(error);
      toast.error("Terjadi error saat menghapus artikel");
    }
  };

  // Logic for displaying current articles
  const indexOfLastArticle = (currentPage + 1) * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArtikels = artikels.slice(indexOfFirstArticle, indexOfLastArticle);

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
      <div className='font-rhodium text-primary px-5 w-full md:ml-[250px]'>
        <p className='text-3xl p-5'>List Artikel</p>
        <hr className='border-primary border-b-2 ' />
        <Link
          to={'/admin/add-artikel'}
          className='flex justify-end px-4 mt-2'>
          <p className='mt-3 bg-primary text-secondary px-6 py-2 md:w-[200px] w-[200px] text-center rounded-md m-2'>
            Tambah artikel
          </p>
        </Link>

        {/* TABLE LIST */}
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[1000px] lg:overflow-x-scroll p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse  w-[950px]  mx-auto '>
            <thead>
              <tr className=' bg-secondary rounded-md ring-2 ring-primary'>
                <th className=' bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px] border-r-2 border-primary'>foto</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 border-r-2 border-primary'>Judul Artikel</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] border-r-2 border-primary'>Nama Penulis</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 border-r-2 border-primary'>Isi</th>
                <th className=' bg-secondary rounded-r-md p-2 md:text-[14px] md:px-6 '>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentArtikels.map(artikel => (
                <tr className=' text-center' key={artikel.id}>
                  <td className='p-2 border-r-2 border-primary w-[150px]'>
                    <img 
                      src={artikel.foto === 0 ? '/logo_login.png' : 'https://api.pranugumproduction.com/' + artikel.foto} 
                      alt="" 
                      className='w-[150px]' 
                    />
                  </td>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'><p>{artikel.judul}</p></td>
                  <td className='p-2 border-r-2 border-primary'><p>{artikel.penulis}</p></td>
                  <td className=' mt-5 px-2 border-r-2 border-primary'>
                    <p dangerouslySetInnerHTML={{ __html: artikel.isi }} className='line-clamp-2 md:line-clamp-3'/>
                  </td>
                  <td className=' p-2'>
                    <div className='flex gap-2'>
                      <Link 
                        to={`/admin/edit-artikel/${artikel.id}`}
                        className='bg-primary p-2 rounded-md'>
                        <FaPencil className='text-secondary'/>
                      </Link>
                      <button 
                        className='bg-primary p-2 rounded-md' 
                        onClick={() => handleDelete(artikel.id)}
                      >
                        <BsTrash className='text-secondary' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className='border-b-2 border-primary mt-5 mx-3'/>
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(artikels.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-between w-[300px]  text-secondary bg-primary rounded-md p-1 px-4 md:ml-6 ml-5 mb-5"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default ArtikelList;
