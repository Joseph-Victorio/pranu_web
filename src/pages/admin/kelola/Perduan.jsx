import SideNav from '../../../components/admin/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import toast from "react-hot-toast";
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';

import { VscSearch } from "react-icons/vsc";

const Perduan = () => {
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
        const res = await axios.get('https://api.pranugumproduction.com/kontak.php');
        setData(res.data.kontak);
        setFilteredData(res.data.kontak);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses tampilan perduan");
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "Perduan");
    XLSX.writeFile(workbook, "perduan.xlsx");
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = data.filter(item => 
      item.nama.toLowerCase().includes(value) ||
      item.jenis_pesan.toLowerCase().includes(value) ||
      item.telemail.toLowerCase().includes(value) ||
      item.pesan.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
    setCurrentPage(0); 
  };

  return (
    <div className="flex gap-5">
      <SideNav />
      <div className="font-rhodium text-primary xl:p-5 w-full md:ml-[250px]">
        <p className="text-3xl px-5 py-2 mt-2">Pertanyaan dan Pengaduan</p>
        <hr className="border-primary border-b-2" />
        <div className="flex justify-between items-baseline px-3">
          <button 
            onClick={exportToExcel} 
            className="bg-primary text-secondary p-2 rounded-md mt-4 hover:bg-secondary hover:text-primary duration-300 ease-in-out ">
            Export to Excel
          </button>
          <div className='flex relative'>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={handleSearch} 
              className=" border-b-2 outline-none border-primary bg-transparent text-primary"
              placeholder="Cari..."
            />
            <VscSearch className='text-secondary absolute right-0'/>
          </div>
        </div>
        <div className='overflow-x-scroll w-[350px] md:w-[500px] lg:w-[750px] xl:overflow-hidden xl:w-[1000px] lg:overflow-x-scroll p-3'>
          <table className='rounded-md ring-2 ring-primary border-collapse mt-3 w-[full] mx-auto '>
            <thead>
              <tr className='bg-secondary rounded-md ring-2 ring-primary'>
                <th className='bg-secondary rounded-l-md p-2 w-[100px] md:text-[14px] border-r-2 border-primary'>No</th>
                <th className='bg-secondary rounded-l-md p-2 w-[300px] md:text-[14px] border-r-2 border-primary'>Nama</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[300px] border-r-2 border-primary'>Jenis Pesan</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[300px] border-r-2 border-primary'>Telemail</th>
                <th className='bg-secondary p-2 md:text-[14px] md:px-6 w-[300px] rounded-r-md'>Pesan</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr className='text-center' key={item.id}>
                  <td className='p-2 text-sm border-r-2 border-primary'>{indexOfFirstItem + index + 1}</td>
                  <td className='p-2 text-sm border-r-2 border-primary'>{item.nama}</td>
                  <td className='p-2 text-sm border-r-2 border-primary'>{item.jenis_pesan}</td>
                  <td className='p-2 text-sm border-r-2 border-primary'>{item.telemail}</td>
                  <td className='p-2 text-sm'>{item.pesan}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className='border-2 border-primary mt-6' />
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-between w-[300px] mt-2 text-secondary bg-primary rounded-md p-1 px-4 ml-3"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Perduan;
