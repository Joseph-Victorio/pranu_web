import axios from "axios";
import { useState, useEffect } from "react";
import ProdukCard from "../../components/ProdukCard";
import { IoIosArrowRoundBack } from "react-icons/io";
import KategoriHeader from "../../components/KategoriHeader";
import ReactPaginate from 'react-paginate';
import Footer from "../../components/Footer";

const Lighting = () => {
  const [lighting, setLighting] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchAllLighting = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/lighting.php');
        setLighting(res.data.produkData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllLighting();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageItems = lighting.slice(offset, offset + itemsPerPage);

  return (
    <>
    <div className="p-5 md:px-20 font-rhodium">
      <KategoriHeader 
        nama={'Lighting'}
        jumlah={lighting.length}
      />
      <a href="/produk" className="text-primary text-2xl flex items-center gap-2 mb-5">
        <IoIosArrowRoundBack />kembali
      </a>
      <p className="text-tersier mb-5">Menampilkan {lighting.length} produk</p>
      {/* CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 ">
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
          pageCount={Math.ceil(lighting.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex items-center gap-1 font-rhodium  md:w-[300px] mx-auto"}
          pageClassName={"page-item bg-secondary w-[30px] h-[30px] flex justify-center rounded-full border-primary border-[1px] font-rhodium text-primary p-1"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item bg-secondary w-[30px] h-[30px] flex justify-center rounded-full border-primary border-[1px] font-rhodium text-primary p-1"}
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

export default Lighting;
