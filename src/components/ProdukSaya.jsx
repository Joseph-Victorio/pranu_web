import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LiaSearchSolid } from "react-icons/lia";
import { Button } from "@mui/material";

const ProdukSaya = () => {
  const [produks, setProduk] = useState([]);

  useEffect(() => {
    const fetchAllProduk = async () => {
      try {
        const res = await axios.get("http://localhost/api/produk.php");
        setProduk(res.data.produkData || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProduk();
  }, []);

  const semuaBtn = () => {
    // Implement your button functionality here
  };

  const formatCurrencyIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <section className="p-5 sm:p-[75px] font-rhodium">
        <h2 className="text-[30px] text-primary">Produk Kami</h2>

        {/* lihatsemua */}
        <Link to={'/produk'}>
          <p className="text-tersier mb-5 text-right">Lihat semua &#62;</p>
        </Link>
        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10">
          {Array.isArray(produks) && produks.map(produk => (
            <div className="w-[152px] h-[220px] md:w-[289px] md:h-[400px] xl:w-[280px] gap-5 rounded-[15px] md:rounded-[30px] border-2 border-primary p-2 bg-white mx-auto" key={produk.id}>
              {/* IMG */}
              <div className="sm:w-[237px] w-[237px] mx-auto">
                <img 
                  src={`http://localhost/api/${produk.foto}`} 
                  alt={produk.nama_produk}
                  className="w-[132px] h-[117.89px] md:w-[237px] md:h-[216px] rounded-[15px]" 
                />
              </div>

              {/* CONTENT */}
              <div className="w-[237px] mx-auto">
                {/* CATEGORY */}
                <p className="text-tersier text-[8px] md:text-[14px] mt-2 md:mt-4">{produk.kategori}</p>
                {/* NAMA */}
                <p className="text-[10px] md:text-[18px] text-primary mt-1">{produk.nama_produk}</p>
                {/* HARGA SEWA */}
                <p className="text-secondary text-[10px] md:text-[18px] mt-1">{formatCurrencyIDR( produk.harga)}<span className="text-tersier">/hari</span></p>
                <a href={`/produk/${produk.id}`}>
                  <button className="bg-primary rounded-full w-[133px] h-[18px] md:w-[237px] md:h-[38px] text-white text-[10px] md:mt-2 md:text-[14px]">
                    Tambahkan
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProdukSaya;
