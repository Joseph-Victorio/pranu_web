import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import SideNav from '../../../components/admin/SideNav'

import { FaPencil } from "react-icons/fa6"
import { BsTrash } from "react-icons/bs"

const ProdukList = () => {
  const [produks, setProduk] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage] = useState(5) //atur paginationnya

  useEffect(() => {
    const fetchAllProduk = async () => {
      try {
        const res = await axios.get("http://localhost:8800/produk")
        setProduk(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllProduk()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8800/produk/'+id)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  // Logic for displaying current products
  const indexOfLastProduct = (currentPage + 1) * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = produks.slice(indexOfFirstProduct, indexOfLastProduct)

  // Logic for handling page click
  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
  }

  return (
    <div className='flex gap-5 mt-20 sm:mt-0'>
      <SideNav />
      {/* KANAN */}
      <div className='font-rhodium text-primary xl:p-5 mt-2 w-full md:ml-[250px]'>
        <p className='text-3xl p-5'>List Produk</p>
        <hr className='border-primary border-b-2 ' />
        <Link
          to={'/admin/add-produk'}
          className='float-right'>
          <p className='mt-3 bg-primary text-secondary px-6 py-2 md:w-[200px] w-[200px] text-center rounded-md m-2'>
            Tambah Produk
          </p>
        </Link>

        {/* TABLE LIST */}
        <div className='overflow-x-scroll w-[350px] md:w-[800px] md:overflow-hidden p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[700px] md:w-[750px] mx-auto'>
            <thead>
              <tr className=' bg-secondary rounded-md ring-2 ring-primary'>
                <th className=' bg-secondary rounded-l-md p-2 w-[100px] md:text-[20px]'>foto</th>
                <th className=' bg-secondary p-2 md:text-[20px] md:px-6 '>Nama Produk</th>
                <th className=' bg-secondary p-2 md:text-[20px] md:px-6'>Harga</th>
                <th className=' bg-secondary p-2 md:text-[20px] md:px-6'>Kategori</th>
                <th className=' bg-secondary rounded-r-md p-2 md:text-[20px] md:px-6'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentProducts) && currentProducts.map(produk => (
                <tr className=' text-center' key={produk.id}>
                  <td className='p-2'><img src={'../backend/uploads/produk/' + produk.foto} alt="" /></td>
                  <td className='p-2'><p>{produk.nama_produk}</p></td>
                  <td className='p-2'><p>{produk.harga}</p></td>
                  <td className='p-2'><p>{produk.kategori}</p></td>
                  <td className=' p-2'>
                    <div
                      className='flex gap-2 '>
                        <Link 
                        to={`/admin/edit-produk/${produk.id}`}
                          className='bg-primary p-2 rounded-md'>
                            <FaPencil className='text-secondary'/>
                        </Link>
                        <button className='bg-primary p-2 rounded-md' onClick={()=>handleDelete(produk.id)}>
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
              pageCount={Math.ceil(produks.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination flex justify-between w-[300px] mt-5 text-secondary bg-primary rounded-md p-1 px-4 md:ml-14"}
              activeClassName={"active"}
            />
      </div>
    </div>
  )
}

export default ProdukList
