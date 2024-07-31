import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Modal from '../../../components/Modal'; // Assuming you have a Modal component

const EditArtikel = () => {
  const { id } = useParams();
  const [currentFoto, setCurrentFoto] = useState('');
  const [formData, setFormData] = useState({
    judul: '',
    penulis: '',
    isi: '',
    foto: 'no-image.jpeg', // Default photo if none provided
  });
  const [permission, setPermission] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for help
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/admin.php');
        setPermission(res.data.userAdmin);
        const hasPermission = res.data.userAdmin.some(p => p.login === "TRUE");
        if (!hasPermission) {
          navigate('/'); // Redirect if the user does not have permission
        } else {
          setLoading(false); // Set loading to false when permissions are confirmed
        }
      } catch (error) {
        console.log(error);
        toast.error("Terjadi error saat memproses data admin");
        setLoading(false); // Ensure loading is stopped on error
      }
    };
    fetchAdmin();
  }, [navigate]);

  useEffect(() => {
    if (loading) return; // Skip fetching data if loading is true

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.pranugumproduction.com/editArtikel.php?id=${id}`);
        const { judul, penulis, isi, foto } = response.data;
        setFormData({
          judul: judul || '',
          penulis: penulis || '',
          isi: isi || '',
          foto: foto || 'no-image.jpeg', // Set default photo if none provided
        });
        setCurrentFoto(foto ? `https://api.pranugumproduction.com/${foto}` : 'no-image.jpeg'); // Set current photo URL
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Terjadi error saat mengambil data.');
      }
    };

    fetchData();
  }, [id, loading]); // Add loading to dependency array to refetch when loading changes

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
      data.append('judul', formData.judul);
      data.append('penulis', formData.penulis);
      data.append('isi', formData.isi);

      // Only append 'foto' if it's a File object (not a string like 'no-image.jpeg')
      if (formData.foto instanceof File) {
        data.append('foto', formData.foto);
      }

      // Perform the POST request
      const response = await axios.post(`https://api.pranugumproduction.com/editArtikel.php`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success
      toast.success('Artikel Berhasil Diupdate', {
        duration: 4000,
      });

      console.log('Server response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error updating data:', error);
      toast.error('Terjadi error saat memproses data.');
    }
  };

  const handleBantuan = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async () => {
    // Add any confirmation logic here if needed
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
      <h1 className='text-primary text-4xl mb-4'>Update Artikel</h1>
      <hr className='border-secondary' />
      <Link 
        to="/admin/artikel-list"
        className='font-bold w-[150px] text-[15px] md:text-[20px] flex mt-5 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out'>
        <p>&#8592; Kembali</p>
      </Link>
      <form onSubmit={handleSubmit} className='md:w-[500px] md:mx-auto md:text-[24px]'>
        <div>
          <div className='flex flex-col gap-1 mb-2'>
            <label htmlFor='judul' className='text-primary font-semibold'>
              Judul:
            </label>
            <input
              type='text'
              id='judul'
              name='judul'
              value={formData.judul}
              onChange={handleChange}
              required
              placeholder='Judul'
              className='outline-primary rounded-md px-2 border-primary'
            />
          </div>
          <div className='flex flex-col gap-1 mb-2'>
            <label htmlFor='penulis' className='text-primary font-semibold'>
              Penulis:
            </label>
            <input
              type='text'
              id='penulis'
              name='penulis'
              value={formData.penulis}
              placeholder='Penulis'
              onChange={handleChange}
              required
              className='outline-primary rounded-md px-2 border-primary'
            />
          </div>
        </div>
        <div className='flex flex-col gap-1 mb-2'>
          <label htmlFor='isi' className='text-primary font-semibold'>
            Isi:
          </label>
          <textarea
            id='isi'
            name='isi'
            value={formData.isi}
            placeholder='Isi'
            onChange={handleChange}
            required
            className='outline-primary rounded-md px-2 border-primary h-[300px] p-2'
          />
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
        {currentFoto && (
          <div className='mb-2'>
            <img
              src={currentFoto}
              alt='Current'
              className='w-full h-auto'
            />
          </div>
        )}
        <button
          type='submit'
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4 hover:bg-secondary hover:text-primary ease-in-out duration-300 transition'>
          Edit Artikel
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

export default EditArtikel;
