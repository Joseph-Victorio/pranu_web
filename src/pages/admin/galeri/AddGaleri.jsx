import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddGaleri = () => {
    const [formData, setFormData] = useState({
        nama: '',
        foto: 'no-image.jpeg',
      });
      const [permission, setPermission] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/admin.php');
        setPermission(res.data.userAdmin);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses data admin");
      }
    };
    fetchAdmin();
  }, []);

  useEffect(() => {
    // Redirect if the user does not have permission
    const checkPermission = () => {
      const userHasAccess = permission.some(p => p.login === "TRUE");
      if (userHasAccess === "FALSE") {
        navigate('/'); // Correctly use navigate function
      }
    };
    checkPermission();
  }, [permission, navigate]);
    
      const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, foto: e.target.files[0] }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const data = new FormData();
          for (let key in formData) {
            data.append(key, formData[key]);
          }
    
          await axios.post('https://api.pranugumproduction.com/galeri.php', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          toast.success('Foto Berhasil Ditambahkan', {
            duration: 4000,
          });
    
          setFormData({
            nama: '',
            foto: '',
          });
        } catch (error) {
          console.error('Error uploading data:', error);
          toast.error('Terjadi error saat memproses data.');
        }
      };
  return (
    <div className='p-5 font-rhodium'>
      <h1 className='text-primary text-4xl mb-4'>Upload Foto</h1>
      <hr className='border-secondary' />
      <a
        href='/admin/galeri-list'
        className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-5 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out'
      >
        <p>&#8592;</p> <p>Kembali</p>
      </a>
      <form onSubmit={handleSubmit} className='md:w-[500px] md:mx-auto md:text-[24px]'>
        <div>
          <div className='flex flex-col gap-1 mb-2'>
            <label htmlFor='nama' className='text-primary font-semibold'>
              Nama:
            </label>
            <input
              type='text'
              id='nama'
              name='nama'
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder='Nama'
              className='outline-primary rounded-md px-2 border-primary'
            />
           
          </div>
          
        </div>
        
        <div className='flex flex-col gap-1 mb-2'>
          <label htmlFor='foto' className='text-primary font-semibold'>
            Foto:
          </label>
          <input
            type='file'
            id='foto'
            name='foto'
            onChange={handleFileChange}
            accept='image/*'
          />
        </div>
        <button
          type='submit'
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4'>
          Simpan Foto
        </button>
      </form>
    </div>
  )
}

export default AddGaleri