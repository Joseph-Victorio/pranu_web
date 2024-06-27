import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'


const EditArtikel = () => {
  const { id } = useParams()
  const [currentFoto, setCurrentFoto] = useState('')

  const [formData, setFormData] = useState({
    judul: '',
    penulis: '',
    isi: '',
    foto: null
  })
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/artikel/${id}`)
        const { judul, penulis, isi, foto } = response.data
        setFormData({
          judul: judul || '',
          penulis: penulis || '',
          isi: isi || '',
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
      data.append('judul', formData.judul)
      data.append('penulis', formData.penulis)
      data.append('isi', formData.isi)
      if (formData.foto) {
        data.append('foto', formData.foto)
      } 
      
      await axios.put(`http://localhost:8800/artikel/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      toast.success('Artikel Berhasil Diupdate', {
        duration: 2000,
      })
      
      setTimeout(() => {
        window.location="/admin/artikel-list"
      }, 2000);
    } catch (error) {
      console.error('Error updating data:', error)
      toast.error('Terjadi error saat memproses data.')
    }
  }

  return (
    <div className='p-5 font-rhodium'>
      <h1 className='text-primary text-4xl mb-4'>Update Artikel</h1>
      <hr className='border-secondary' />
      <Link 
        to="/admin/artikel-list"
        className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-5 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out'>
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
          <div>
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
        </div>

        <div>
          <div className='flex flex-col gap-1 mb-2'>
            <label htmlFor='isi' className='text-primary font-semibold'>
              Isi:
            </label>
            <textarea
              type='text'
              id='isi'
              name='isi'
              value={formData.isi}
              placeholder='Isi'
              onChange={handleChange}
              required
              className='outline-primary rounded-md px-2 border-primary h-[300px] p-2'
            />
          </div>
          <div>
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
          </div>
        </div>

        <button
          type='submit'
          className='px-6 py-2 bg-primary text-secondary rounded-md mt-4'>
          Update Artikel
        </button>
      </form>
    </div>
  )
}

export default EditArtikel
