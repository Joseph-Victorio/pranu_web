import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"




const ArtikelSingle = () => {
    const {id} = useParams()
    
    const [SingleArtikel, setSingleArtikel] = useState('')

    useEffect(()=>{
        const fetchArtikelPerId = async ()=>{
            try {
                const res = await axios.get('https://api.pranugumproduction.com/artikel.php?id='+id)
                setSingleArtikel(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchArtikelPerId()
    },[id])
  return (
    <>
    <Navbar/>
    <div className="px-6">
        
        <a 
        href="/"
        className='font-bold w-[100px] text-[15px] md:text-[20px] flex mt-5 items-center gap-2 text-primary hover:text-secondary transition duration-300 ease-in-out '>
        <p>&#8592; Kembali</p>
      </a>
        <div className="px-6 lg:px-[100px] py-5">
            <div className="w-[300px] md:w-[500px] mx-auto ">
                <img 
                    src={'https://api.pranugumproduction.com/'+SingleArtikel.foto} 
                    alt=""
                    className="w-full bg-cover" />
            </div>
            {/* penulisnya */}
            <p className="text-tersier font-semibold mt-4 md:text-[20px]">Posted By {SingleArtikel.penulis}</p>
            {/* judulnya */}
            <p className="font-bold text-left text-[36px] md:text-[40px] lg:text-[72px] mt-1">
                {SingleArtikel.judul}
            </p>
        </div>
        <div
            dangerouslySetInnerHTML={{ __html: SingleArtikel.isi }}
            className="px-6 mb-10 text-justify"/>
    
    </div>
    <Footer/>
    </>
  )
}

export default ArtikelSingle