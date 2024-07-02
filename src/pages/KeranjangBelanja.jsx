import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const KeranjangBelanja = () => {
  const [barang, setBarang] = useState([])

  useEffect(() => {
    const fetchItems = () => {
      const storageItems = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        try {
          storageItems.push({ key, value: JSON.parse(value) })
        } catch (error) {
          // Handle JSON.parse errors if the value is not a valid JSON string
          console.error("Parsing error on", key, value)
          storageItems.push({ key, value })
        }
      }
      setBarang(storageItems)
    }
    
    fetchItems()
  }, [])

  const formatCurrencyIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number)
  }

  const handleDelete = (key) => {
    localStorage.removeItem(key)
    setBarang((prevBarang) => prevBarang.filter((item) => item.key !== key))
  }

  return (
    <div>
      <Navbar />
      <div className="px-5 py-2 md:px-10 md:py-5">
        <img src="/keranjangBelanjaHeader.svg" alt="" />
        {/* isi keranjang */}
        <div>
          {Array.isArray(barang) && barang.map(bar => (
            <div key={bar.key} className="mb-4 border p-3 rounded">
              <p><strong>{bar.key}</strong></p>
              {typeof bar.value === 'object' && bar.value !== null ? (
                <div>
                  <img src={bar.value.foto} alt="" className="w-16 h-16" />
                  <p>Name: {bar.value.nama_produk}</p>
                  <p>Price: {formatCurrencyIDR(bar.value.harga)}</p>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => handleDelete(bar.key)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <p>{bar.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default KeranjangBelanja
