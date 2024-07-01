import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const EditUlasan = () => {
    const { id } = useParams()
    const [currentFoto, setCurrentFoto] = useState('')
  
    const [formData, setFormData] = useState({
      nama: '',
      ulasan: '',
      foto: null
    })
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8800/ulasan/${id}`)
          const { nama, ulasan,  foto } = response.data
          setFormData({
            nama: nama || '',
            ulasan: ulasan || '',
            foto: foto || ''
          })
          setCurrentFoto(foto) 
        } catch (error) {
          console.error('Error fetching data:', error)
          toast.error('Terjadi error saat mengambil data.')
        }
      }
  
      fetchData()
    }, [id])
  
    const handleChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  
    const handleFileChange = (e) => {
        setFormData({
          ...formData,
          foto: e.target.files[0],
        })
        setCurrentFoto(URL.createObjectURL(e.target.files[0])) // Preview image
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const data = new FormData()
        data.append('nama', formData.nama)
        data.append('ulasan', formData.ulasan)
        if (formData.foto) {
          data.append('foto', formData.foto)
        } 
        
        await axios.put(`http://localhost:8800/ulasan/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
  
        toast.success('Ulasan Berhasil Diupdate', {
          duration: 2000,
        })
        
        setTimeout(() => {
          window.location="/admin/ulasan-list"
        }, 2000);
      } catch (error) {
        console.error('Error updating data:', error)
        toast.error('Terjadi error saat memproses data.')
      }
    }
  return (
    <div className='p-5 font-rhodium'>
      <h1 className='text-primary text-4xl mb-4'>Edit Ulasan</h1>
      <hr className='border-secondary' />
      <a
        href='/admin/ulasan-list'
        className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-5 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out'
      >
        <p>&#8592;</p> 
        <p>Kembali</p>
      </a>
      <form onSubmit={handleSubmit} className='md:w-[500px] md:mx-auto md:text-[24px]'>
        <div>
          <div className='flex flex-col gap-1 mb-2'>
            <label htmlFor='nama' className='text-primary font-semibold'>
              nama:
            </label>
            <input
              type='text'
              id='nama'
              name='nama'
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder='nama'
              className='outline-primary rounded-md px-2 border-primary'
            />
          </div>
          <div className='flex flex-col gap-1 mb-2'>
            <label htmlFor='ulasan' className='text-primary font-semibold'>
              Ulasan:
            </label>
            <textarea
              type='text'
              id='ulasan'
              name='ulasan'
              value={formData.ulasan}
              placeholder='Ulasan'
              onChange={handleChange}
              required
              className='outline-primary rounded-md px-2 border-primary h-[300px]'
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
        {currentFoto && (
              <div className='mb-2'>
                <img
                  src={currentFoto}
                  alt='Current'
                  className='w-[150px] h-auto'
                />
              </div>
            )}
        <button
          type='submit'
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4'>
          Update Ulasan
        </button>
      </form>
    </div>
  )
}

export default EditUlasan