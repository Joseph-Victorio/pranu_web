import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios"; // Missing axios import

const Invoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({}); 

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await axios.get(`http://localhost/api/invoice.php?id=${id}`);
       
        console.log("Fetching invoice for ID:", id);
        console.log("API Response:", res.data);
        const invoiceData = res.data || {};
      console.log("Setting invoice data:", invoiceData); // Add this line
      setInvoice(invoiceData);
      } catch (error) {
        console.error("Error fetching invoice:", error);
      }
    };
    fetchInvoice();
  }, [id]);
  const formatDateIndonesian = (dateString) => {
    if (!dateString) return "Tanggal tidak tersedia";
    
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    const indonesianMonthNames = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const day = date.getDate();
    const month = indonesianMonthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  console.log(invoice)

  return (
    <>
      <div className="p-5 md:w-[1000px] mx-auto bg-white">
        {/* Header */}
        <div className="flex justify-between gap-10 items-center">
          <div>
            <img src="/logo/pranuBiruHitam.png" alt="Logo" className="w-[200px]" />
          </div>
          <div className="text-right">
            <p className="text-[10px] md:text-2xl">Invoice</p>
            <p className="font-bold text-[10px] md:text-2xl">Pranugum Production</p>
            <p className="text-[9px] md:text-lg">
              Jl. Aria Putra No.2, RT.3/RW.5, Serua Indah, Kec. Ciputat, Kota
            </p>
            <p className="text-[9px] md:text-lg">Tangerang Selatan, Banten 15414</p>
            <p className="text-[9px] md:text-lg">ID</p>
            <p className="text-[9px] md:text-lg">082111192434</p>
            <p className="text-[9px] md:text-lg">Email: productionpranugum@gmail.com</p>
          </div>
        </div>

        {/* Bill To Section */}
        <div className="p-5 flex flex-col md:flex-row bg-gray-200 mt-10 justify-between">
          <div>
            <p className="font-bold">DITAGIH KEPADA</p>
            <p>{invoice.nama}</p>
          </div>
          <div className="flex justify-between gap-10 w-[300px]">
            <div>
              <p className="font-bold">Invoice #</p>
              <p className="font-bold">Tanggal</p>
            </div>
            <div>
              <p className="font-bold">{invoice.no_invoice}</p>
              <p className="font-bold">{formatDateIndonesian(invoice.tanggal)}</p>
            </div>
          </div>
        </div>

        <hr className="border-[2px] border-gray-200 mt-10" />

        {/* Items Section */}
        <div className="flex gap-10 justify-between  px-5">
          <p className="font-bold text-[10px] md:text-xl">Barang</p>
          <div className="flex justify-around gap-10 md:gap-20">
            <p className="font-bold text-[10px] md:text-xl">Kuatitas</p>
            <p className="font-bold text-[10px] md:text-xl">Harga</p>
            <p className="font-bold text-[10px] md:text-xl">Jumlah</p>
          </div>
        </div>
        <hr className="border-[2px] border-gray-200" />

        {/* Item Details */}
        <div className="px-5 flex gap-10 justify-between items-center border-b-[4px] border-gray-200 pb-2">
          <div>
            <p className="font-bold text-[8px] md:text-[13px] mt-2">{invoice.nama_barang}</p>
          </div>
          <div className="flex justify-around gap-10 md:gap-20">
            <p className="font-bold text-[8px] md:text-[13px]">{invoice.jumlah}</p>
            <p className="font-bold text-[8px] md:text-[13px]">{invoice.harga}</p>
            <p className="font-bold text-[8px] md:text-[13px]">{invoice.total}</p>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="flex justify-between px-5 flex-col md:flex-row">
          <div className="w-[400px]">
            <p className="font-bold text-[10px] md:text-xl">Instruksi Pembayaran</p>
            <p className="text-[10px] md:text-xl">BCA : 8770726043 a/n Fatimah Azahra</p>
            <p className="text-[10px] md:text-xl">BRI : 210501000424561 a/n Galih Prastia Nugraha Gumelar</p>
          </div>
          <div className="flex flex-col gap-10 md:w-[600px]">
            <div className="flex justify-around gap-16 items-center">
              <p>Subtotal</p>
              <p>{invoice.total}</p>
            </div>
            <div className="flex justify-around gap-16 items-center">
              <p>Total</p>
              <p>{invoice.total}</p>
            </div>
            <hr className="border-2" />
            <div className="flex justify-between mt-[-20px]">
              <p className="text-[12px] md:text-[16px]">Dibayarkan pada 21 Agustus 2024</p>
              <p>{invoice.total}</p>
            </div>
            <div className="bg-gray-200 p-5 md:w-[500px] ml-[50px]">
              <p className="md:text-2xl">Jumlah yang harus dibayar</p>
              <p className="md:text-5xl text-right">{invoice.total}</p>
            </div>
          </div>
        </div>

        <hr className="border-2 mt-5" />
        <p className="p-2 md:text-xl">
          Dengan menandatangani dokumen ini, pelanggan setuju dengan layanan dan persyaratan yang tercantum dalam dokumen ini.
        </p>
        <p className="font-bold md:text-xl">Pranugum Production</p>
        <img src="/admin/ttd.png" alt="Signature" className="w-[125px] ml-10" />
        <p className="font-bold">Galih Prastia Nugraha Gumelar</p>
        <div className="flex items-center gap-2">
          <div className="text-gray-200 md:text-4xl">____</div>
          <p className="mt-8">21 Agustus 2024</p>
          <div className="text-gray-200 md:text-4xl">____</div>
        </div>
      </div>

      <button className="flex gap-1 items-center">
        <FaArrowLeftLong />
        <p>Kembali</p>
      </button>
    </>
  );
};

export default Invoice;
