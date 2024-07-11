import React from "react";

const KategoriHeader = ({ nama, jumlah }) => {
  return (
    <div className="font-rhodium border-primary border-2 rounded-[15px] bg-secondary text-primary text-center p-5 flex flex-col mb-5">
      <p className="text-[25px] md:text-[40px]">{nama}</p>
      <span className="flex gap-1 mx-auto">
        <p className="text-white text-[10px] md:text-[20px]">
          _________________
        </p>
        <p className="text-[14px] md:text-[28px]">{jumlah} produk</p>
        <p className="text-white text-[10px] md:text-[20px] ">
          _________________
        </p>
      </span>
    </div>
  );
};

export default KategoriHeader;
