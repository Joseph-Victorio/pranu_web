import axios from "axios"
import toast from "react-hot-toast"
import NavBiru from '../components/NavBiru'

import { FaRegUser } from "react-icons/fa"
import { MdOutlinePhoneEnabled } from "react-icons/md"
import { MdOutlineMessage } from "react-icons/md"
import { CiMail } from "react-icons/ci"
import { CiInstagram } from "react-icons/ci"

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

  // const [Nama, setNama] = useState('')
  // const [selectedOption, setSelectedOption] = useState('')
  // const [Telemail, setTelemail] = useState('')
  // const [PesanForm, setPesanForm] = useState('')
  // const notify = () => toast.success("Berhasil Mengirim Pesan")

  const [KontakForm, setKontakForm] = useState({
    nama_penanya: "",
    jenis_pesan : "Pertanyaan",
    telemail: "",
    pesan: "",
  })
  console.log(KontakForm)
  const handleChange = (e)=>{
    setKontakForm((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandle = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:8800/kontak", KontakForm);
      toast.success("Pesan Berhasil Dikirim");
      toast('Terima kasih, pesan mu akan kami proses ya, mohon ditunggu', {
        icon: '🙏',
        duration:5000,
      })
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
      } else {
        console.log("An error occurred:", error.message);
      }
    }
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
            {Pesan && <p className=" h-[50px] md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5 mt-4 text-primary">Cara Mudah Memesan</p>}
            {Syarat && <p className="h-[50px] md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5 mt-4 text-primary">Syarat Dan Ketentuan</p>}
            {Kebijakan && <p className="h-[50px] md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5 mt-4 text-primary">Kebijakan Privasi</p>}
            {Kontak && <p className="h-[50px] md:text-[40px] xl:text-[40px] text-[20px] text-center md:mt-5  mt-4 text-primary">Kontak Pranugum Production</p>}
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
                className='p-5 border-primary border-2 mt-[-20px] md:mt-[0px] rounded-[15px] bg-white'>
                  {/* NAMA */}
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-5 flex-col md:flex-row xl:flex-row'>
                      <div>
                        <div className='flex gap-1 text-primary items-center'>
                          <FaRegUser className='text-primary'/>
                          <p>Nama*</p>
                        </div>
                        <input 
                          type="text"
                          name='nama_penanya'
                          placeholder='Masukkan Nama Anda'
                          required
                          onChange={handleChange}
                          className='md:w-[397px] h-[40px] md:h-[62px] xl:w-[397px] xl:h-[62px] bg-background  rounded-[15px] border-primary border-[1px] px-4 focus:outline-primary' />
                      </div>
                      <div>
                      <p className='text-primary'>Jenis Pesan*</p>
                        <select 
                          name="jenis_pesan"
                          onChange={handleChange}
                          required
                          className='border-primary focus:outline-primary active:outline-primary bg-background rounded-[15px] h-[40px] w-[260px] md:w-[397px] md:h-[62px] px-4 text-primary'
                          defaultValue={"Pertanyaan"}
                        >
                            <option value="" disabled hidden >
                              Pilih Jenis Pesan
                            </option>
                            <option value="Pertanyaan" className='text-primary' default >
                                Pertanyaan
                            </option>
                            <option value="Pengaduan" className='text-primary'>
                                Pengaduan
                            </option>
                          </select>
                      </div>
                    </div>

                    <div>
                        <div className='flex gap-1 text-primary items-center'>
                          <MdOutlinePhoneEnabled className='text-primary'/>
                          <p>Nomor Telepon/Email*</p>
                        </div>
                        <input 
                          type="text"
                          name='telemail'
                          placeholder='Masukkan nomor telepon/email Anda'
                          required
                          onChange={handleChange}
                          className='md:w-[397px] md:h-[62px] xl:w-[397px] xl:h-[62px] bg-background  rounded-[15px] h-[40px] border-primary border-[1px] px-4 focus:outline-primary' />
                      </div>
                  </div>
                  <div className='flex flex-col mt-2'>
                    <div className='flex gap-1 items-center text-primary'>
                    <MdOutlineMessage />
                    <p>Pesan*</p>
                    </div>
                    <textarea 
                      name="pesan"
                      required
                      onChange={handleChange}
                      className='w-full h-[207px] xl:w-[834px] xl:h-[207px] bg-background  rounded-[15px] border-primary border-[1px] px-4 py-2 focus:outline-primary mb-5' >

                      </textarea>
                  </div>
                  <button
                    onClick={submitHandle}
                    className='bg-primary w-full px-6 py-3 text-white rounded-xl md:mt-5 '>
                    Kirim Pesan
                  </button>
              </form>
              <div className='mt-5 text-primary'>
                <div className='flex gap-2 items-center text-[10px] md:text-[20px] xl:text-[20px]'>
                <CiInstagram />
                <p>@pranu.pro</p>
                </div>
                <div className='flex gap-2 items-center text-[10px] md:text-[20px] xl:text-[20px]'>
                <MdOutlineMessage />
                <p>0812-9507-9288</p>
                </div>
                <div className='flex gap-2 items-center text-[10px] md:text-[20px] xl:text-[20px]'>
                <CiMail />
                <p>productionpranugum@gmail.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Informasi