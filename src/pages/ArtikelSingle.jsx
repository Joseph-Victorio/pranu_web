import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"




const ArtikelSingle = () => {
    const {id} = useParams()
    
    const [SingleArtikel, setSingleArtikel] = useState('')

    useEffect(()=>{
        const fetchArtikelPerId = async ()=>{
            try {
                const res = await axios.get('http://localhost:8800/artikel/'+id)
                setSingleArtikel(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchArtikelPerId()
    },[id])
  return (
    <div>
        <Navbar/>
        <div className="px-6 lg:px-[100px] py-5">
            <div className="w-[300px] md:w-[500px] mx-auto ">
                <img 
                    src={SingleArtikel.foto} 
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
            dangerouslySetInnerHTML={{ __html: SingleArtikel.isi }}/>
    
    </div>
  )
}

export default ArtikelSingle