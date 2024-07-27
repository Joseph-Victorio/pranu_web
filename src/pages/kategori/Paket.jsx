import axios from "axios"
import { useState, useEffect } from "react"
import ProdukCard from "../../components/ProdukCard"
import { IoIosArrowRoundBack } from "react-icons/io";
import KategoriHeader from "../../components/KategoriHeader";

const Paket = () => {
  const [Paket, setPaket] = useState([])

  useEffect(()=>{
      const fetchAllPaket = async ()=>{
          try {
             const res = await axios.get('https://api.pranugumproduction.com/paket.php')
             setPaket(res.data.produkData)
          } catch (error) {
              console.log(error)
          }
      }
      fetchAllPaket()
  },[])
  return (
    <div className="p-5 md:px-20 font-rhodium">
        <KategoriHeader 
            nama={'Paket '}
            jumlah={Paket.length}/>
        <a href="/produk" className="text-primary text-2xl flex items-center gap-2 mb-5"><IoIosArrowRoundBack />kembali</a>
        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 ">
            { Paket.map(produk => (
                    <ProdukCard
                        key={produk.id}
                        foto={produk.foto}
                        kategori={produk.kategori}
                        nama={produk.nama_produk}
                        harga={produk.harga}
                        produk_id={produk.id}
                    />
            ))}
        </div>
    </div>
  )
}

export default Paket