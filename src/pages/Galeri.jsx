import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useState, useEffect } from 'react'
import axios from 'axios'

const Galeri = () => {
    const [Foto, setFoto] = useState([])

    useEffect(()=>{
        const fetchAllFoto = async ()=>{
            try {
                const res = await axios.get('https://api.pranugumproduction.com/galeri.php')
                setFoto(res.data.galeriData || [])
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllFoto()
    },[])
  
    return (
        <div>
            <Navbar/>
            <a 
                href="/tentang-kami"
                className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-2 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out md:ml-16 mb-5'>
                <p>&#8592;</p> <p>Kembali</p>
            </a>
            <div className='px-6 mb-10 columns-2 md:columns-3 xl:columns-4 gap-4'>
                {Foto.map((f, index) => (
                    <div key={index} className='relative mb-4 break-inside-avoid'>
                        <img 
                            src={`https://api.pranugumproduction.com/${f.foto}`} 
                            alt={f.nama} 
                            className='w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
                        />
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Galeri
