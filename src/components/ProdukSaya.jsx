import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const ProdukSaya = () => {
    
    const [produks, setProduk] = useState([])

    useEffect(()=>{
        const fetchAllProduk = async ()=>{
            try {
                const res  = await axios.get("http://localhost:8800/produk")
                setProduk(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllProduk()
    },[])

  return (
    
    <>
        <section className="p-5 sm:p-[75px] font-rhodium ">
        <h2 className="text-[30px] text-primary">Produk Kami</h2>
        {/* TOMBOL */}
        <div>

        </div>
        {/* CARDS */}
        <div className="flex  flex-row gap-5 overflow-x-scroll sm:overflow-x-hidden ">
            {Array.isArray(produks) && produks.map(produk=>(
                <>
                    {/* CARD */}
                    <div className="w-[289px] h-[420px] rounded-[30px] border-2 border-primary p-2 bg-white mx-auto">
                        {/* IMG */}
                        <div className="sm:w-[237px] w-[237px] mx-auto">
                            <img 
                                src="/MovingBeam.png" 
                                alt=""
                                className="w-full" />
                        </div>
                        {/* CONTENT */}
                        <div className=" w-[237px] mx-auto">
                            {/* CATEGORY */}
                            <p className="text-tersier text-[14px] mt-4">{produk.kategori}</p>
                            {/* NAMA */}
                            <p className="text-[18px] text-primary mt-1">{produk.nama_produk}</p>
                            {/* HARGA SEWA */}
                            <p className="text-secondary text-[18px] mt-1">Rp {produk.harga}<span className="text-tersier">/hari</span></p>
                            <button className="bg-primary rounded-full w-full text-white px-6 py-2 mt-8">Pesan</button>
                        </div>
                    </div>
                </>
            ))}
            
            
        </div>
    </section>
    </>
  )
}

export default ProdukSaya