import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import toast from "react-hot-toast"

import SideNav from '../../../components/admin/SideNav'

import { FaPencil } from "react-icons/fa6"
import { BsTrash } from "react-icons/bs"

const ArtikelList = () => {
  const [artikels, setartikel] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); //atur paginationnya

  useEffect(() => {
    const fetchAllArtikel = async () => {
      try {
        const res = await axios.get("http://localhost:8800/artikel");
        setartikel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllArtikel();
  }, []);

  const handleDelete = async (id) => {
    try {
      toast.success("Berhasil Menghapus Artikel!")
      await axios.delete('http://localhost:8800/artikel/'+id);
      setTimeout(()=>{
        window.location.reload()
      },500)
    
    } catch (error) {
      console.log(error);
    }
  };

  // Logic for displaying current products
  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentArtikels = artikels.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic for handling page click
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className='flex gap-5 mt-20 sm:mt-0'>
      <SideNav />
      {/* KANAN */}
      <div className='font-rhodium text-primary xl:p-5 mt-2 w-full md:ml-[250px]'>
        <p className='text-3xl p-5'>List Artikel</p>
        <hr className='border-primary border-b-2 ' />
        <Link
          to={'/admin/add-artikel'}
          className='float-right'>
          <p className='mt-3 bg-primary text-secondary px-6 py-2 md:w-[200px] w-[200px] text-center rounded-md m-2'>
            Tambah artikel
          </p>
        </Link>

        {/* TABLE LIST */}
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[800px] lg:overflow-x-scroll p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[750px] md:w-[750px] mx-auto '>
            <thead>
              <tr className=' bg-secondary rounded-md ring-2 ring-primary'>
                <th className=' bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px]'>foto</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 '>Judul Artikel</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] '>Nama Penulis</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6'>Isi</th>
                <th className=' bg-secondary rounded-r-md p-2 md:text-[14px] md:px-6'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentArtikels) && currentArtikels.map(artikel => (
                <tr className=' text-center' key={artikel.id}>
                  <td className='p-2'><img src={artikel.foto=== 0 ?'/logo_login.png':'../backend/uploads/artikel/' + artikel.foto } alt="" className='w-[150px]'/></td>
                  <td className='p-2 text-sm w-[150px]'><p>{artikel.judul}</p></td>
                  <td className='p-2'><p>{artikel.penulis}</p></td>
                  <td className='line-clamp-2 md:line-clamp-1 mt-5 px-2'><p dangerouslySetInnerHTML={{ __html: artikel.isi }}/></td>
                  <td className=' p-2'>
                    <div
                      className='flex gap-2 '>
                        <Link 
                        to={`/admin/edit-artikel/${artikel.id}`}
                          className='bg-primary p-2 rounded-md'>
                            <FaPencil className='text-secondary'/>
                        </Link>
                        <button className='bg-primary p-2 rounded-md' onClick={()=>handleDelete(artikel.id)}>
                          <BsTrash className='text-secondary' />
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(artikels.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination flex justify-between w-[300px] mt-5 text-secondary bg-primary rounded-md p-1 px-4 md:ml-14 ml-5"}
              activeClassName={"active"}
            />
      </div>
    </div>
  )
}

export default ArtikelList