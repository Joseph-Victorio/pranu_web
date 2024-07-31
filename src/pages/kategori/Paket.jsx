import axios from "axios";
import { useState, useEffect } from "react";
import ProdukCard from "../../components/ProdukCard";
import { IoIosArrowRoundBack } from "react-icons/io";
import KategoriHeader from "../../components/KategoriHeader";
import ReactPaginate from 'react-paginate';
import { IoFilterSharp } from "react-icons/io5";
import Footer from "../../components/Footer";

const Paket = () => {
  const [paket, setPaket] = useState([]);
  const [filteredPaket, setFilteredPaket] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const itemsPerPage = 8; 
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchAllPaket = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/paket.php');
        setPaket(res.data.produkData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPaket();
  }, []);

  

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
    setIsDropdownOpen(false);
    if(filter === 'highestPrice') {
      const sortedPaket = paket.sort((a, b) => b.harga - a.harga);
      setFilteredPaket(sortedPaket);
    } else if(filter === 'lowestPrice') {
      const sortedPaket = paket.sort((a, b) => a.harga - b.harga);
      setFilteredPaket(sortedPaket);
    } else if(filter === 'newestProduct') {
      const sortedPaket = paket.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setFilteredPaket(sortedPaket);
    } else {
      setFilteredPaket(paket);
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentPageItems = filter===''? paket.slice(offset, offset + itemsPerPage) : filteredPaket.slice(offset, offset + itemsPerPage);

  return (
    <>
    <div className="p-2 ml-5 md:ml-0 md:px-20 font-rhodium">
      <KategoriHeader
        nama={'Paket '}
        jumlah={filter === '' ? paket.length : filteredPaket.length}
      />
      <a href="/produk" className="text-primary md:text-2xl flex items-center gap-2 md:mb-5 w-[120px]">
        <IoIosArrowRoundBack />kembali
      </a>
      <div className="flex justify-between mb-5 font-rhodium w-full items-center px-5 md:px-0 relative">
        <p className="text-tersier">Menampilkan {filter === '' ? paket.length : filteredPaket.length} produk</p>
        {/* Dropdown Filter */}
        <div onClick={toggleDropdown} className="cursor-pointer w-[45px] h-[45px] bg-secondary hover:bg-primary text-primary hover:text-secondary ease-in-out duration-300 border-primary border-[2px] rounded-full flex justify-center p-3">
          <IoFilterSharp/>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-10 right-0 mt-2 w-48 bg-secondary border border-primary rounded-md shadow-lg p-1 ">
            <ul>
            <li onClick={() => handleFilter('highestPrice')} className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-secondary ease-in-out duration-300 rounded-md">Harga Tertinggi</li>
              <li onClick={() => handleFilter('lowestPrice')} className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-secondary ease-in-out duration-300 rounded-md">Harga Terendah</li>
              {/* <li onClick={() => handleFilter('newestProduct')} className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-secondary ease-in-out duration-300 rounded-md">Produk Terbaru</li> */}
            </ul>
          </div>
        )}
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-8">
        {currentPageItems.map(produk => (
          <ProdukCard
            key={produk.id}
            foto={produk.foto}
            kategori={produk.kategori}
            nama={produk.nama_produk}
            harga={produk.harga}
            produk_id={produk.id}
          />
        ))}
      </div>
      <div className="w-screen mt-5">
        {/* PAGINATION */}
        <ReactPaginate
          previousLabel={""}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(paket.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex items-center gap-1 font-rhodium  md:w-[300px] mx-auto"}
          pageClassName={"page-item bg-secondary w-[30px] h-[30px] flex justify-center rounded-full border-primary border-[1px] font-rhodium text-primary p-1 hover:bg-primary duration-300 ease-in-out hover:text-secondary"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item bg-secondary w-[30px] h-[30px] flex justify-center rounded-full border-primary border-[1px] font-rhodium text-primary p-1 hover:bg-primary duration-300 ease-in-out hover:text-secondary"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Paket;
