import axios from "axios"
import { useState, useEffect } from "react"
import ProdukCard from "../../components/ProdukCard"
import { IoIosArrowRoundBack } from "react-icons/io";
import KategoriHeader from "../../components/KategoriHeader";


const Genset = () => {
    const [Genset, setGenset] = useState('')

    useEffect(()=>{
        const fetchAllGenset = async ()=>{
            try {
               const res = await axios.get('http://localhost:8800/produk-list/genset')
               setGenset(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllGenset()
    },[])

  return (
    <div className="p-5 md:px-20 font-rhodium">
        <KategoriHeader 
            nama={'Genset'}
            jumlah={Genset.length}/>
        <a href="/produk" className="text-primary text-2xl flex items-center gap-2 mb-5"><IoIosArrowRoundBack />kembali</a>
        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 ">
            {Array.isArray(Genset) && Genset.map(produk=>(
                <>
                    {/* CARD */}
                    <ProdukCard
                        key={produk.id}
                        foto={produk.foto}
                        kategori={produk.kategori}
                        nama={produk.nama_produk}
                        harga={produk.harga}
                        produk_id={produk.id}
                    />
                </>
            ))}
        </div>
    </div>
  )
}

export default Genset