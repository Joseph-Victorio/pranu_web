import React, { useState, useEffect } from 'react';
import SideNav from '../../../components/admin/SideNav';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import toast from "react-hot-toast";
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
import { VscSearch } from "react-icons/vsc";

const Penyewa = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [permission, setPermission] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
    const checkPermission = () => {
      const userHasAccess = permission.some(p => p.login === "TRUE");
      if (userHasAccess === "FALSE") {
        navigate('/');
      }
    };
    checkPermission();
  }, [permission, navigate]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/penyewa.php');
        setData(res.data.penyewa);
        setFilteredData(res.data.penyewa);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses tampilan penyewa");
      }
    };
    fetchAllData();
  }, []);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Penyewa");
    XLSX.writeFile(workbook, "penyewa.xlsx");
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = data.filter(item => 
      item.nama.toLowerCase().includes(value) ||
      item.telepon.toLowerCase().includes(value) ||
      item.alamat.toLowerCase().includes(value) ||
      item.pesanan.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
    setCurrentPage(0);
  };

  return (
    <div className="flex gap-5">
      <SideNav />
      <div className="font-rhodium text-primary xl:p-5  w-full md:ml-[250px]">
        <p className="text-3xl p-5 ">Data Penyewa</p>
        <hr className="border-primary border-b-2" />
        <div className="flex justify-between items-baseline px-5">
        <button 
          onClick={exportToExcel} 
          className="bg-primary text-secondary p-2 rounded-md mt-4 hover:bg-secondary hover:text-primary duration-300 ease-in-out float-right text-[12px] md:text-[16px]">
          Export to Excel
        </button>
        <div className='flex relative mb-1'>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={handleSearch} 
            className="border-b-2 outline-none border-primary bg-transparent text-primary p-2 w-full"
            placeholder="Cari..."
          />
          <VscSearch className='text-secondary absolute right-2 top-1/2 transform -translate-y-1/2'/>
        </div>
        </div>
        <div className='overflow-x-scroll w-full md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[1000px] lg:overflow-x-scroll p-3 px-5'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[950px]  mx-auto '>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[150px] md:text-[14px] border-r-2 border-primary'>Nama</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] border-r-2 border-primary'>No Telepon</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] border-r-2 border-primary'>Tanggal Sewa</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] border-r-2 border-primary'>Tanggal Selesai</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] border-r-2 border-primary'>Alamat</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] border-r-2 border-primary'>Pesanan</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[150px] rounded-r-md'>Tanggal Pesan</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map(item => (
                <tr className='text-center' key={item.id}>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'><p>{item.nama}</p></td>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'><p>{item.telepon}</p></td>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'><p>{new Date(item.sewa).toLocaleDateString('id-ID')}</p></td>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'><p>{new Date(item.balik).toLocaleDateString('id-ID')}</p></td>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'><p>{item.alamat}</p></td>
                  <td className='p-2 text-sm w-[150px] border-r-2 border-primary'><p>{item.pesanan}</p></td>
                  <td className='p-2 text-sm w-[150px] '><p>{new Date(item.tgl_pesanan).toLocaleDateString('id-ID')}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className='border-b-2 border-primary mt-5 '/>
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-between w-[300px] mt-5 text-secondary bg-primary rounded-md p-1 px-4 ml-5"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Penyewa;
