

import axios from "axios"
import { useEffect, useState } from "react"


import { LiaSearchSolid } from "react-icons/lia";

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

    const semuaBtn = ()=>{

    }
  return (
    
    <>
        <section className="p-5 sm:p-[75px] font-rhodium ">
        <h2 className="text-[30px] text-primary mt-5">Produk Kami</h2>
        {/* TOMBOL */}
        <div className="flex justify-between mb-10 flex-col-reverse md:flex-col-reverse xl:flex-col-reverse gap-5 ">
            {/* BUTTONS */}
            <div className="flex gap-1 md:gap-3  overflow-y-hidden  flex-1 mb-2 mt-2">
                {/* SEMUA */}
                <button
                    className="bg-primary text-white rounded-[40px] px-6 py-2 text-[10px] md:text-[15px] flex-1"
                    onClick={semuaBtn}>
                    Semua
                </button>
                <button
                    className="bg-primary text-white rounded-[40px] px-6 py-2 text-[10px] md:text-[15px] flex-1"
                    onClick={semuaBtn}>
                    Backdrop
                </button>
                <button
                    className="bg-primary text-white rounded-[40px] px-6 py-2 text-[10px] md:text-[15px] flex-1"
                    onClick={semuaBtn}>
                    Genset
                </button>
                <button
                    className="bg-primary text-white rounded-[40px] px-6 py-2 text-[10px] md:text-[15px] text-center "
                    onClick={semuaBtn}>
                   <p className="break-keep flex w-[143px] text-center justify-center">LED Screen</p>
                </button>
                <button
                    className="bg-primary text-white rounded-[40px] px-6 py-2 text-[10px] md:text-[15px] flex-1"
                    onClick={semuaBtn}>
                    lainnya
                </button>
            </div>
            <div className="relative  ">
                <input 
                    type="text"
                    name="search"
                    placeholder="Cari..."
                    className="border-b-2 bg-background text-primary focus:outline-none border-primary pr-6 w-full md:w-full md:mt-2 xl:float-right" />
                
                <LiaSearchSolid className="text-secondary absolute top-1 right-2"/>
            </div>
        </div>
        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 ">
            {Array.isArray(produks) && produks.map(produk=>(
                <>
                    {/* CARD */}
                    <div className="w-[152px] h-[220px] md:w-[289px] md:h-[420px] xl:w-[280px] gap-5 rounded-[15px] md:rounded-[30px] border-2 border-primary p-2 bg-white mx-auto " >
                        {/* IMG */}
                        <div className="sm:w-[237px] w-[237px] mx-auto">
                            <img 
                                src={'/uploads/produk/'+produk.foto} 
                                alt=""
                                className="w-[132px] h-[117.89px] md:w-[237px] md:h-[216px] rounded-[15px]" />
                        </div>
                        
                        {/* CONTENT */}
                        <div className=" w-[237px] mx-auto" key={produk.id}>
                            {/* CATEGORY */}
                            <p className="text-tersier text-[8px] md:text-[14px] mt-2 md:mt-4">{produk.kategori}</p>
                            {/* NAMA */}
                            <p className="text-[10px] md:text-[18px] text-primary mt-1">{produk.nama_produk}</p>
                            {/* HARGA SEWA */}
                            <p className="text-secondary text-[10px] md:text-[18px] mt-1">Rp {produk.harga}<span className="text-tersier">/hari</span></p>
                            <button className="bg-primary rounded-full w-[133px] h-[18px] md:w-[237px] md:h-[38px] text-white text-[10px] md:mt-8 md:text-[14px] ">Tambahkan</button>
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