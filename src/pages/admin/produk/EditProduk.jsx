import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const EditProduk = () => {
  const { id } = useParams();
  const [currentFoto, setCurrentFoto] = useState('');
  const [formData, setFormData] = useState({
    nama_produk: '',
    harga: '',
    kategori: '',
    deskripsi: '',
    ketentuan: '',
    foto: 'no-image.jpeg', // Default photo if none provided
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost/api/produk.php?id=${id}`);
        const { nama_produk, harga, kategori, foto, deskripsi, ketentuan } = response.data;
        setFormData({
          nama_produk: nama_produk || '',
          harga: harga || '',
          kategori: kategori || '',
          deskripsi: deskripsi || '',
          ketentuan: ketentuan || '',
          foto: foto || 'no-image.jpeg', // Set default photo if none provided
        });
        setCurrentFoto(`http://localhost/api/${foto}`); // Set current photo URL
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Terjadi error saat mengambil data.');
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      foto: e.target.files[0], // Update photo in formData
    });
    setCurrentFoto(URL.createObjectURL(e.target.files[0])); // Update current photo preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = new FormData();
      data.append('id', id); // Ensure id is passed if needed in your backend
      data.append('nama_produk', formData.nama_produk);
      data.append('harga', formData.harga);
      data.append('kategori', formData.kategori);
      data.append('deskripsi', formData.deskripsi);
      data.append('ketentuan', formData.ketentuan);
      
      // Only append 'foto' if it's a File object (not a string like 'no-image.jpeg')
      if (formData.foto instanceof File) {
        data.append('foto', formData.foto);
      }
  
      // Perform the PUT request
      const response = await axios.put(`http://localhost/api/produk.php`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Handle success
      toast.success('Produk Berhasil Diupdate', {
        duration: 4000,
      });
  
      console.log('Server response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error uploading data:', error);
      toast.error('Terjadi error saat memproses data.');
    }
  };
  

  return (
    <div className='p-5 font-rhodium'>
      <h1 className='text-primary text-4xl mb-4'>Update Produk</h1>
      <hr className='border-secondary' />
      <a href="/admin/produk-list" className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-2 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out'>
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
        {currentFoto && (
          <div className='mb-2'>
            <img
              src={currentFoto}
              alt='Current'
              className='w-[100px]'
            />
          </div>
        )}
        <button
          type="submit"
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4'
        >
          Edit Produk
        </button>
      </form>
    </div>
  );
};

export default EditProduk;
