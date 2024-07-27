import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';
import bcrypt from 'bcryptjs'; // Import bcryptjs library

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    pass: '',
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

    // Hash the 'pass' field using bcryptjs
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(formData.pass, salt);

    // Construct the form data with hashed password
    const form = new FormData();
    form.append('username', formData.username);
    form.append('pass', hashedPass); // Use hashed password in form data

    try {
      await axios.post('http://localhost/api/admin.php', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Produk Berhasil Ditambahkan', {
        duration: 4000,
      });
      setFormData({
        username: '',
        pass: '',
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
          <label htmlFor="username" className='text-primary font-semibold'>Nama Produk:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder='Nama Produk'
            className='outline-primary rounded-md px-2 border-primary'
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="pass" className='text-primary font-semibold'>pass:</label>
          <input
            type="text"
            id="pass"
            name="pass"
            value={formData.pass}
            placeholder='pass'
            onChange={handleChange}
            required
            className='outline-primary rounded-md px-2 border-primary'
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

export default Register;
