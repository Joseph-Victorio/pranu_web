import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast"
import { useParams } from 'react-router-dom';

const AddArtikel = () => {
    const [formData, setFormData] = useState({
        judul: '',
        penulis: '',
        isi: '',
        foto: 'no-image.jpeg',
      });
    
      const handleChange = (e) => {
       setFormData((prev)=>({...prev, [e.target.name]: e.target.value}))
      };
    
      const handleFileChange = (e) => {
        setFormData({
          ...formData,
          foto: e.target.files[0],
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           await axios.post('http://localhost:8800/artikel/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          toast.success('Artikel Berhasil Ditambahkan',{
            duration: 4000,
          });
          setFormData({
            judul: '',
            penulis: '',
            isi: '',
            foto: '',
          })
        } catch (error) {
          console.error('Error uploading data:', error)
          toast.error('Terjadi error saat memproses data.')
        }
      };
  return (
    <div className='p-5 font-rhodium'>
      <h1 className='text-primary text-4xl mb-4'>Upload Artikel</h1>
      <hr className='border-secondary'/>
      <a 
        href="/admin/artikel-list"
        className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-5 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out'>
          <p>&#8592;</p> <p>Kembali</p>
        </a>
      <form onSubmit={handleSubmit} className='md:w-[500px] md:mx-auto md:text-[24px] '>
        <div>
         <div className="flex flex-col gap-1 mb-2">
         <label htmlFor="judul" className='text-primary font-semibold'>Judul:</label>
          <input
            type="text"
            id="judul"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            required
            placeholder='Judul'
            className='outline-primary rounded-md px-2 border-primary'
          />
         </div>
         <div>
          <div className="flex flex-col gap-1 mb-2">
            <label htmlFor="penulis" className='text-primary font-semibold'>Penulis:</label>
            <input
              type="text"
              id="penulis"
              name="penulis"
              value={formData.penulis}
              placeholder='Penulis'
              onChange={handleChange}
              required
              className='outline-primary rounded-md px-2 border-primary'
            />
          </div>
        </div>
        </div>
        
        <div>
          <div className="flex flex-col gap-1 mb-2">
            <label htmlFor="isi" className='text-primary font-semibold'>isi:</label>
            <textarea
              type="text"
              id="isi"
              name="isi"
              value={formData.isi}
              placeholder='isi'
              onChange={handleChange}
              required
              className='outline-primary rounded-md px-2 border-primary h-[300px] p-2'
            />
          </div>
          <div>
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
        </div>
        </div>
        
        <button 
          type="submit"
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4'
          >
            Tambah Artikel
          </button>
      </form>
     
    </div>
  )
}

export default AddArtikel