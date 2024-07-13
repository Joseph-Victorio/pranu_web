import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';

const AddProduk = () => {
  const [formData, setFormData] = useState({
    nama_produk: '',
    harga: '',
    kategori: '',
    deskripsi: '',
    ketentuan: '',
    foto: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      foto: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      await axios.post('https://api.pranugumproduction.com/produk.php', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Produk Berhasil Ditambahkan', {
        duration: 4000,
      });
      setFormData({
        nama_produk: '',
        harga: '',
        kategori: '',
        deskripsi: '',
        ketentuan: '',
        foto: null,
      });
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('An error occurred while processing your request.');
    }
  };

  return (
    <div className='p-5 font-rhodium'>
      <h1 className='text-primary text-4xl mb-4 ml-10'>Upload Produk</h1>
      <hr className='border-secondary' />
      <a 
        href="/admin/produk-list"
        className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-5 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out ml-10'>
          <p>&#8592;</p> <p>Kembali</p>
      </a>
      <form onSubmit={handleSubmit} className='md:w-[500px] md:mx-auto md:text-[24px]'>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="nama_produk" className='text-primary font-semibold'>Nama Produk:</label>
          <input
            type="text"
            id="nama_produk"
            name="nama_produk"
            value={formData.nama_produk}
            onChange={handleChange}
            required
            placeholder='Nama Produk'
            className='outline-primary rounded-md px-2 border-primary'
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="harga" className='text-primary font-semibold'>Harga:</label>
          <input
            type="number"
            id="harga"
            name="harga"
            value={formData.harga}
            placeholder='Harga'
            onChange={handleChange}
            required
            className='outline-primary rounded-md px-2 border-primary'
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="kategori" className='text-primary font-semibold'>Kategori:</label>
          <input
            type="text"
            id="kategori"
            name="kategori"
            value={formData.kategori}
            placeholder='Kategori'
            onChange={handleChange}
            required
            className='outline-primary rounded-md px-2 border-primary'
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="deskripsi" className='text-primary font-semibold'>Deskripsi:</label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            value={formData.deskripsi}
            placeholder='Deskripsi'
            onChange={handleChange}
            required
            className='outline-primary rounded-md px-2 border-primary'
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="ketentuan" className='text-primary font-semibold'>Ketentuan:</label>
          <textarea
            id="ketentuan"
            name="ketentuan"
            value={formData.ketentuan}
            placeholder='Ketentuan'
            onChange={handleChange}
            required
            className='outline-primary rounded-md px-2 border-primary'
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="foto" className='text-primary font-semibold'>Foto:</label>
          <input
            type="file"
            id="foto"
            name="foto"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <button 
          type="submit"
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4'
        >
          Simpan Produk
        </button>
      </form>
    </div>
  );
};

export default AddProduk;
