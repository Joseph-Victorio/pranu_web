import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { BsTrash } from 'react-icons/bs';
import { FaPencil } from "react-icons/fa6";

import SideNav from '../../../components/admin/SideNav';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const ProdukList = () => {
  const [produks, setProduk] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10); 
  const [permission, setPermission] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/admin.php');
        setPermission(res.data.userAdmin);
        const cek = res.data.userAdmin.map(p => p.login);
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
    const fetchAllProduk = async () => {
      try {
        const res = await axios.get("https://api.pranugumproduction.com/produk.php");
        setProduk(res.data.produkData || []); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProduk();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.pranugumproduction.com/produk.php?id=${id}`);
      setProduk(produks.filter(produk => produk.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = produks.slice(indexOfFirstProduct, indexOfLastProduct);

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
      <div className='font-rhodium text-primary px-5 xl:p-5  w-full md:ml-[250px]'>
        <p className='text-3xl p-5'>List Produk</p>
        <hr className='border-primary border-b-2 ' />
        <Link to={'/admin/add-produk'} className='flex justify-end xl:px-8'>
          <p className='mt-3 bg-primary text-secondary px-6 py-2 md:w-[200px] w-[200px] text-center rounded-md m-1  hover:bg-secondary  hover:text-primary duration-300 ease-in-out transition '>
            Tambah Produk
          </p>
        </Link>

        <div className='overflow-x-scroll w-full md:w-[1000px] md:overflow-hidden p-3 px-4'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[900px] md:w-[950px] mx-auto xl:mx-0'>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[20px] border-r-2 border-primary'>foto</th>
                <th className='bg-secondary p-2 md:text-[20px] md:px-6 border-r-2 border-primary'>Nama Produk</th>
                <th className='bg-secondary p-2 md:text-[20px] md:px-6 border-r-2 border-primary'>Harga</th>
                <th className='bg-secondary p-2 md:text-[20px] md:px-6 border-r-2 border-primary'>Kategori</th>
                <th className='bg-secondary rounded-r-md p-2 md:text-[20px] md:px-6 '>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((produk) => (
                <tr className='text-center' key={produk.id}>
                  <td className='p-2 border-r-2 border-primary w-[150px]'><img src={`https://api.pranugumproduction.com/${produk.foto}`} alt="" /></td>
                  <td className='p-2 border-r-2 border-primary'><p>{produk.nama_produk}</p></td>
                  <td className='p-2 border-r-2 border-primary'><p>{produk.harga}</p></td>
                  <td className='p-2 border-r-2 border-primary'><p>{produk.kategori}</p></td>
                  <td className='p-2'>
                    <div className='flex gap-2 justify-center'>
                      <Link to={`/admin/edit-produk/${produk.id}`} className='bg-primary p-2 rounded-md hover:bg-secondary text-secondary  hover:text-primary duration-300 ease-in-out transition '>
                        <FaPencil />
                      </Link>
                      <button className='bg-primary p-2 rounded-md hover:bg-secondary text-secondary  hover:text-primary duration-300 ease-in-out transition ' onClick={() => handleDelete(produk.id)}>
                        <BsTrash className='' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className='border-b-2 border-primary mt-5 mr-4'/>
        </div>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(produks.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-between w-[300px] mt-2  text-secondary bg-primary rounded-md p-1 px-4 md:ml-4"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default ProdukList;
