import SideNav from '../components/admin/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import toast from "react-hot-toast";
import * as XLSX from 'xlsx'; // Importing xlsx library

const Admin = () => {
  const [penyewa, setPenyewa] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Atur paginationnya

  // Logic for displaying current products
  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentPenyewa = penyewa.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic for handling page click
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    const fetchAllPenyewa = async () => {
      try {
        const res = await axios.get('http://localhost:8800/penyewa');
        setPenyewa(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses tampilan penyewa");
      }
    };
    fetchAllPenyewa();
  }, []);

  // Function to export data to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(penyewa);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Penyewa");
    XLSX.writeFile(workbook, "penyewa.xlsx");
  };

  return (
    <div className="flex gap-5">
      <SideNav />
      <div className="font-rhodium text-primary xl:p-5 mt-2 w-full md:ml-[250px]">
        <p className="text-3xl p-5 mt-20 md:mt-5">Dashboard</p>
        <hr className="border-primary border-b-2" />
        {/* Export Button */}
        <button 
          onClick={exportToExcel} 
          className="bg-secondary text-primary p-2 rounded-md mt-4">
          Export to Excel
        </button>
        {/* TABLE LIST */}
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
              {Array.isArray(currentPenyewa) && currentPenyewa.map(penyewa => (
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
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(penyewa.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-between w-[300px] mt-5 text-secondary bg-primary rounded-md p-1 px-4 md:ml-14 ml-5"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Admin;
