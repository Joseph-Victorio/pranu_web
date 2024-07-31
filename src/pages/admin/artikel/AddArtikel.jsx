import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/Modal'; // Make sure the path is correct

const AddArtikel = () => {
  const [formData, setFormData] = useState({
    judul: '',
    penulis: '',
    isi: '',
    foto: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permission, setPermission] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/admin.php');
        setPermission(res.data.userAdmin);
        const userHasAccess = res.data.userAdmin.some(p => p.login === "TRUE");
        if (!userHasAccess) {
          navigate('/');
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses data admin");
        setLoading(false);
      }
    };
    fetchAdmin();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, foto: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('https://api.pranugumproduction.com/artikel.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Artikel Berhasil Ditambahkan', {
        duration: 4000,
      });
      setFormData({
        judul: '',
        penulis: '',
        isi: '',
        foto: null,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Terjadi error saat memproses data.');
      setIsModalOpen(false); 
    }
  };

  const handleBantuan = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    // Implement your confirm logic here
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src="/logo/PRANUGUMBiruPutih.png" alt="Logo" className="w-full max-w-xs mx-auto my-auto" />
      </div>
    );
  }

  return (
    <div className='p-5 font-rhodium'>
      <h1 className='text-primary text-4xl mb-4 ml-10'>Upload Artikel</h1>
      <hr className='border-secondary' />
      <a 
        href="/admin/artikel-list"
        className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-2 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out md:ml-5 '>
          <p>&#8592;</p> <p>Kembali</p>
      </a>
      <form onSubmit={handleSubmit} className='md:ml-5 md:mx-auto md:text-[24px]'>
        <div className="flex xl:flex-row xl:gap-5 flex-col">
          {/* judul */}
          <div className="flex flex-col gap-1 mb-2 flex-1">
            <label htmlFor="judul" className='text-primary font-semibold'>Judul:</label>
            <input
              type="text"
              id="judul"
              name="judul"
              value={formData.judul}
              onChange={handleChange}
              required
              placeholder='Judul Artikel'
              className='outline-primary rounded-md px-2 border-2 flex-1 border-primary'
            />
          </div>
          {/* penulis */}
          <div className="flex flex-col gap-1 mb-2 flex-1">
            <label htmlFor="penulis" className='text-primary font-semibold'>Penulis:</label>
            <input
              type="text"
              id="penulis"
              name="penulis"
              value={formData.penulis}
              placeholder='Penulis Artikel'
              onChange={handleChange}
              required
              className='outline-primary rounded-md px-2 border-2 flex-1 border-primary'
            />
          </div>
        </div>
        
        <div className='flex xl:flex-row flex-col xl:gap-5 '>
          <div className="flex flex-col gap-1 mb-2 flex-1">
            <label htmlFor="isi" className='text-primary font-semibold'>Isi Artikel:</label>
            <textarea
              id="isi"
              name="isi"
              value={formData.isi}
              placeholder='Isi Artikel'
              onChange={handleChange}
              required
              className='outline-primary rounded-md px-2 text-[14px] border-2 border-primary  xl:h-[120px]'
            />
          </div>
        </div>
        <p onClick={handleBantuan} className='cursor-pointer text-[10px] text-red-600'>*Bantuan pengisian isi artikel</p>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="foto" className='text-primary font-semibold'>Foto:</label>
          <input
            type="file"
            id="foto"
            name="foto"
            onChange={handleFileChange}
            accept="image/*"
            className='w-[330px]'
          />
        </div>
        <button 
          type="submit"
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4 hover:bg-secondary hover:text-primary ease-in-out duration-300 transition w-full'
        >
          Simpan Artikel
        </button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default AddArtikel;
