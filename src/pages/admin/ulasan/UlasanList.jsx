import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import toast from "react-hot-toast"

import SideNav from '../../../components/admin/SideNav'

import { FaPencil } from "react-icons/fa6"
import { BsTrash } from "react-icons/bs"

const UlasanList = () => {
  const [ulasans, setUlasan] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); //atur paginationnya

  useEffect(() => {
    const fetchAllUlasan = async () => {
      try {
        const res = await axios.get("http://localhost:8800/ulasan");
        setUlasan(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUlasan();
  }, []);

  const handleDelete = async (id) => {
    try {
      toast.success("Berhasil Menghapus Ulasan!")
      await axios.delete('http://localhost:8800/ulasan/'+id);
      setTimeout(()=>{
        window.location.reload()
      },200)
    
    } catch (error) {
      console.log(error);
    }
  };

  // Logic for displaying current products
  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentulasans = ulasans.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic for handling page click
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  return (
    <div className='flex gap-5 mt-20 sm:mt-0'>
      <SideNav />
      {/* KANAN */}
      <div className='font-rhodium text-primary xl:p-5 mt-2 w-full md:ml-[250px]'>
        <p className='text-3xl p-5'>List Ulasan</p>
        <hr className='border-primary border-b-2 ' />
        <Link
          to={'/admin/add-ulasan'}
          className='float-right'>
          <p className='mt-3 bg-primary text-secondary px-6 py-2 md:w-[200px] w-[200px] text-center rounded-md m-2'>
            Tambah Ulasan
          </p>
        </Link>

        {/* TABLE LIST */}
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px]  xl:w-[750px] xl:overflow-hidden lg:overflow-x-scroll p-3 mx-auto'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[750px] md:w-[500px] mx-auto '>
            <thead>
              <tr className=' bg-secondary rounded-md ring-2 ring-primary'>
                <th className=' bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px]'>foto</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 '> Nama</th>
                <th className=' bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] '>Ulasan</th>
                <th className=' bg-secondary rounded-r-md p-2 md:text-[14px] md:px-6'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentulasans) && currentulasans.map(ulasan => (
                <tr className=' text-center' key={ulasan.id}>
                  <td className='p-2'><img src={ulasan.foto=== 0 ?'/logo_login.png':'../backend/uploads/ulasan/' + ulasan.foto } alt="" className='w-[150px]'/></td>
                  <td className='p-2 text-sm w-[150px]'><p>{ulasan.nama}</p></td>
                  <td className='line-clamp-2 md:line-clamp-2 xl:line-clamp-2 mt-5 px-2 w-[200px]'><p className='line-clamp-2'>{ulasan.ulasan}</p></td>
                  <td className=' p-2'>
                    <div
                      className='flex gap-2 '>
                        <Link 
                        to={`/admin/edit-ulasan/${ulasan.id}`}
                          className='bg-primary p-2 rounded-md'>
                            <FaPencil className='text-secondary'/>
                        </Link>
                        <button className='bg-primary p-2 rounded-md' onClick={()=>handleDelete(ulasan.id)}>
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
              pageCount={Math.ceil(ulasans.length / itemsPerPage)}
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

export default UlasanList