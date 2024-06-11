import React from 'react'
import NavBiru from '../components/NavBiru'

import { FaRegUser } from "react-icons/fa"

import { useState } from 'react'

const Informasi = () => {
  const [Pesan, setPesan] = useState(true)
  const [Syarat, setSyarat] = useState(false)
  const [Kebijakan, setKebijakan] = useState(false)
  const [Kontak, setKontak] = useState(false)

  const pesanHandle = () => {
    setPesan(true)
    setSyarat(false)
    setKebijakan(false)
    setKontak(false)
  }
  const syaratHandle = () => {
    setPesan(false)
    setSyarat(true)
    setKebijakan(false)
    setKontak(false)
  }
  const kebijakanHandle = () => {
    setPesan(false)
    setSyarat(false)
    setKontak(false)
    setKebijakan(true)
  }
  const kontakHandle = () => {
    setPesan(false)
    setSyarat(false)
    setKebijakan(false)
    setKontak(true)
  }

  const [Nama, setNama] = useState('')
  const [selectedOption, setSelectedOption] = useState('')


  const submitHandle = (e)=>{
    e.preventDefault()
    setNama("")
    console.log(Nama)
  }

  const handleSelect = (e)=>{
    setSelectedOption(e.target.value);
  }


  return (
    <>
      <NavBiru text={"Informasi"} /> 
      <div className="flex xl:flex-row flex-col md:flex-col font-rhodium">
        
        {/* LEFT SIDE */}
        <div className="p-5 shadow-md">
          <div className=" xl:w-[288px] xl:h-[274px] shadow-md p-5 rounded-[16px] shadow-black">
            <p className="text-[13px] md:text-[26px] xl:text-[26px] text-center text-primary md:mb-10">
              Kategori
            </p>
            <div className="flex flex-col">
              <button onClick={pesanHandle}>
                <p className={Pesan ? 'text-primary text-[10px] md:text-[20px] xl:text-[20px] text-left' : 'text-tersier text-[10px] md:text-[20px] xl:text-[20px] text-left'}>
                  Cara Pesan
                </p>
              </button>
              <button onClick={syaratHandle}>
                <p className={Syarat ? 'text-primary text-[10px] md:text-[20px] xl:text-[20px] text-left' : 'text-tersier text-[10px] md:text-[20px] xl:text-[20px] text-left'}>
                  Syarat & Ketentuan
                </p>
              </button>
              <button onClick={kebijakanHandle}>
                <p className={Kebijakan ? 'text-primary text-[10px] md:text-[20px] xl:text-[20px] text-left' : 'text-tersier text-[10px] md:text-[20px] xl:text-[20px] text-left'}>
                  Kebijakan Privasi
                </p>
              </button>
              <button onClick={kontakHandle}>
                <p className={Kontak ? 'text-primary text-[10px] md:text-[20px] xl:text-[20px] text-left' : 'text-tersier text-[10px] md:text-[20px] xl:text-[20px] text-left'}>
                  Kontak
                </p>
              </button>
            </div>
          </div>
        </div>
        
        {/* RIGHT SIDE */}
        <div className="p-5">
          <div className="bg-secondary border-2 border-primary xl:w-[900px] xl:h-[97px] rounded-[15px]">
            {Pesan && <p className="md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5 text-primary">Cara Mudah Memesan</p>}
            {Syarat && <p className="md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5 text-primary">Syarat Dan Ketentuan</p>}
            {Kebijakan && <p className="md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5 text-primary">Kebijakan Privasi</p>}
            {Kontak && <p className="md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5 text-primary">Kontak Pranugum Production</p>}
          </div>
          {/* CARA PESAN */}
          {Pesan && (
            <div className="text-[10px] md:text-[20px] xl:text-[20px] text-justify p-5">
              <p>
                Menyewa produk di Pranugum Production sangat mudah dan cepat. Ikuti langkah-langkah berikut untuk memastikan kamu mendapatkan semua perlengkapan acara yang dibutuhkan:
              </p><br />
              <p>
                1. KLIK ITEM YANG TELAH DIPILIH<br />
                Pilih produk atau peralatan yang kamu butuhkan dari katalog kami.
              </p><br />
              <p>
                2. CEK BARANG DI KERANJANG<br />
                Setelah memilih produk, produk akan masuk ke dalam halaman keranjang. Periksa kembali barang-barang yang telah kamu pilih untuk memastikan semuanya sesuai dengan kebutuhan.
              </p><br />
              <p>
                3. ISI FORM PEMESANAN <br />
                Lengkapi form pemesanan dengan detail acara dan informasi kontak kamu.
              </p><br />
              <p>
                4. HUBUNGI ADMIN VIA WHATSAPP <br />
                Setelah mengisi form, kamu akan diarahkan ke WhatsApp Pranugum Production untuk terhubung langsung dengan admin kami. Diskusikan kebutuhanmu dan negosiasikan harga sewa.
              </p><br />
              <p>
                5. DEAL HARGA <br />
                Setelah mencapai kesepakatan harga, kami akan mengirimkan Surat Perjanjian Kerjasama. Ini berlaku terutama jika kamu memesan semua kebutuhan produksi acara.
              </p><br />
              <p>
              6. KONFIRMASI PESANAN <br />
              Tanda tangani Surat Perjanjian Kerjasama untuk mengkonfirmasi pesananmu agar dapat kami proses pengiriman.
              </p><br />
              <p>
              7. PENGIRIMAN PRODUK <br />
              Produk yang kamu sewa akan dikirimkan sesuai dengan detail dalam surat perjanjian, memastikan semua kebutuhan acaramu terpenuhi tepat waktu.
              </p>
            </div>
          )}
          {/* SYARAT */}
          {Syarat && (
            <div className='p-5 text-justify'>
              {/* SYARAT */}
              <h2 className='text-primary text-[15px] md:text-[30px] xl:text-[30px]'>
                Syarat :
              </h2>
              <br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
                Kami ingin memastikan bahwa pengalaman menyewa perlengkapan acara di Pranugum Production berjalan lancar dan memuaskan. Berikut adalah syarat-syarat yang berlaku :
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
               1. Harga item yang disewakan sudah termasuk biaya loading, instalasi, dan unloading, serta layanan operator dan teknisi.
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
               2. Barang yang disewakan selalu dalam kondisi terawasi dan terawat secara rutin.
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
                3. Jika barang yang disewakan mengalami kerusakan atau tidak berfungsi sebagaimana mestinya, kami akan segera menggantinya.
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
                4. Harga sewa dapat dinegosiasikan untuk pemesanan dalam jumlah besar atau dalam jangka waktu tertentu.
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
                5. Kami siap melayani pemesanan kapan saja, kecuali jika barang tidak tersedia atau dalam situasi force majeure.
              </p><br /><br />
              {/* KETENTUAN */}
              <h2 className='text-primary text-[15px] md:text-[30px] xl:text-[30px]'>
                Ketentuan :
              </h2>
              <br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
                Untuk memastikan proses pemesanan dan pembatalan berjalan lancar, berikut adalah ketentuan yang perlu diperhatikan :
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
               1. Pembayaran dapat dilakukan setelah acara, dengan minimal 10% dari total quotation dibayarkan terlebih dahulu.
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
               2. Pembatalan setelah quotation/penawaran diterima harus dilakukan minimal 30 hari kerja sebelum acara.
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
                3. Pembatalan sepihak yang dilakukan dalam waktu kurang dari 3 hari sebelum acara akan dikenakan biaya pembatalan sebesar 70% dari total quotation yang diterima.
              </p><br />
              <p className='text-[10px] md:text-[20px] xl:text-[20px]'>
                4. Pembatalan yang dilakukan saat barang sudah sampai di lokasi acara akan dikenakan biaya sewa 1 hari.
              </p>
            </div>
          )}
          {/* KEBIJAKA PRIVASI */}
          {Kebijakan && (
            <div className="text-[10px] md:text-[20px] xl:text-[20px] text-justify p-5">
              <p>
                Menyewa produk di Pranugum Production sangat mudah dan cepat. Ikuti langkah-langkah berikut untuk memastikan kamu mendapatkan semua perlengkapan acara yang dibutuhkan:
              </p><br />
              <p>
                1. KLIK ITEM YANG TELAH DIPILIH<br />
                Pilih produk atau peralatan yang kamu butuhkan dari katalog kami.
              </p><br />
              <p>
                2. CEK BARANG DI KERANJANG<br />
                Setelah memilih produk, produk akan masuk ke dalam halaman keranjang. Periksa kembali barang-barang yang telah kamu pilih untuk memastikan semuanya sesuai dengan kebutuhan.
              </p><br />
              <p>
                3. ISI FORM PEMESANAN <br />
                Lengkapi form pemesanan dengan detail acara dan informasi kontak kamu.
              </p><br />
              <p>
                4. HUBUNGI ADMIN VIA WHATSAPP <br />
                Setelah mengisi form, kamu akan diarahkan ke WhatsApp Pranugum Production untuk terhubung langsung dengan admin kami. Diskusikan kebutuhanmu dan negosiasikan harga sewa.
              </p><br />
              <p>
                5. DEAL HARGA <br />
                Setelah mencapai kesepakatan harga, kami akan mengirimkan Surat Perjanjian Kerjasama. Ini berlaku terutama jika kamu memesan semua kebutuhan produksi acara.
              </p><br />
              <p>
              6. KONFIRMASI PESANAN <br />
              Tanda tangani Surat Perjanjian Kerjasama untuk mengkonfirmasi pesananmu agar dapat kami proses pengiriman.
              </p><br />
              <p>
              7. PENGIRIMAN PRODUK <br />
              Produk yang kamu sewa akan dikirimkan sesuai dengan detail dalam surat perjanjian, memastikan semua kebutuhan acaramu terpenuhi tepat waktu.
              </p>
            </div>
          )}
          {/* KONTAK */}
          {Kontak && (
            <div className=' mt-12'>
              <form 
                onSubmit={submitHandle}
                method="post"
                className='p-10 border-primary border-2 rounded-[15px] bg-white'>
                  {/* NAMA */}
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <div>
                        <div className='flex gap-1 text-primary'>
                          <FaRegUser className='text-primary'/>
                          <p>Nama*</p>
                        </div>
                        <input 
                          type="text"
                          name='nama'
                          placeholder='Masukkan Nama Anda'
                          value={Nama}
                          onChange={e=>setNama(e.target.value)}
                          className='xl:w-[397px] xl:h-[62px] bg-background  rounded-[15px] border-primary border-[1px] px-4 focus:outline-primary' />
                      </div>
                      <div>
                        <select 
                          name="jenis_pesan"
                          value={selectedOption}
                          onChange={handleSelect}
                          >
                            <option value="" disabled >
                              Pilih Jenis Pesan
                            </option>
                            <option value="Pertanyaan">
                                Pertanyaan
                            </option>
                            <option value="Pertanyaan">
                                Pengaduan
                            </option>
                          </select>
                      </div>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='bg-primary w-full px-6 py-3 text-white rounded-xl md:mt-5 '>
                    Kirim Pesan
                  </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Informasi