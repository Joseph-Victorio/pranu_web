import React from "react";

const ProdukCard = ({ foto, kategori,nama,harga,produk_id}) => {
    const formatCurrencyIDR = (number) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0
        }).format(number);
      };
  return (
    <div
      className="w-[152px] h-[230px]  md:w-[289px] md:h-[400px] xl:w-[250px] gap-5 rounded-[15px] md:rounded-[30px] border-2 border-primary p-5 bg-white mx-auto "
      
    >
      {/* IMG */}
      <div className="">
        <img
          src={'https://api.pranugumproduction.com/'+foto}
          alt=""
          className="w-[132px] h-[117.89px] md:w-[200px] md:h-[200px] mx-auto  rounded-[15px]"
        />
      </div>

      {/* CONTENT */}
      <div className=" w-[237px] mx-auto">
        {/* CATEGORY */}
        <p className="text-tersier text-[8px] md:text-[14px] mt-2 md:mt-4">
          {kategori}
        </p>
        {/* NAMA */}
        <p className="text-[10px] md:text-[18px] text-primary mt-1">
          {nama}
        </p>
        {/* HARGA SEWA */}
        {kategori==='Paket Produk' ? (
          <>
          <p className="text-secondary text-[10px] md:text-[18px] mt-1">
          {formatCurrencyIDR(harga)}
          <span className="text-tersier">/hari</span>
        </p>
        <a href={`/produk/${produk_id}`} className="">
          <button className="bg-primary hover:bg-secondary ease-in-out duration-300 rounded-full w-[133px] h-[18px] md:w-[200px] md:h-[38px] text-white text-[10px] md:mt-2 md:text-[14px] ml-[-12px] md:ml-5 xl:ml-0">
            Tambahkan
          </button>
        </a>
          </>
        ):(
          <>
        <a href={`/produk/${produk_id}`} className="">
          <button className="bg-primary hover:bg-secondary ease-in-out duration-300 rounded-full w-[133px] h-[18px] md:w-[200px] md:h-[38px] text-white text-[10px] md:mt-10 md:text-[14px] ml-[-12px] md:ml-5 xl:ml-0 ">
            Lihat Detail Produk
          </button>
        </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ProdukCard;
