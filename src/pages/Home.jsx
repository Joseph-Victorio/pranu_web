

import { Link } from 'react-router-dom'
import Produk from './Produk'
import Marquee from '../components/Marquee.jsx'
import HeaderCardCarousel from '../components/HeaderCardCarousel.jsx'
import ProdukSaya from '../components/ProdukSaya.jsx'
import TentangKamiSection from '../components/TentangKamiSection.jsx'
import YangPercaya from '../components/YangPercaya.jsx'
import ApaKataMereka from '../components/ApaKataMereka.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ArtikelCard from '../components/ArtikelCard.jsx'




const Home = () => {
  

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      {/* HEADER */}
        <section className='flex flex-col sm:flex-row   xl:flex-row min-w-fit font-rhodium items-center mt-10 mb-10'>
          {/* KIRI */}
          <div className='p-5 sm:p-[75px] md:p-5 lg:p-[75px] sm:w-1/2 md:w-[400px] lg:w-1/2 lg:flex-1 '>
            <h1 className='sm:text-[57px] text-5xl text-primary'>Prangum <br />Production</h1>
            <p className='mt-5 text-justify '>Pranugum Production siap menyediakan segala perlengkapan acara yang kamu butuhkan! Mulai dari panggung, lighting, sound system hingga LED.</p>
            <p className='mt-5 text-justify'>Percayakan pada kami untuk solusi terbaik dan produk berkualitas yang akan membuat acaramu berkesan. Yuk, temukan layanan terbaik dan produk terbaik untuk acaramu, di Pranugum Production!.</p>
            <Link
              to='/produk'
              className='bg-primary rounded-full w-[274px] text-white px-6 py-4 flex gap-1 items-center text-[22px] mt-5 hover:bg-hover transition ease-in-out duration-300'>
                <p className='mx-auto'>Sewa Sekarang</p>
                <img src="/icons/right.svg" alt="" />
            </Link>
          </div>
          {/* KANAN */}
          <div className='sm:w-1/3 flex-2 mx-auto'>
         
            <HeaderCardCarousel/>
          </div>
        </section>
        {/* <a href="whatsapp://send?text=http://localhost:5173/tentang-kami" data-action="share/whatsapp/share">Share ke whatsapp </a> */}
        <Marquee />
        {/* KENAPA PILIH SINI SECTION */}
        <section className='p-5 sm:p-[50px] font-rhodium md:overflow-x-scroll xl:overflow-hidden overflow-x-scroll mt-5'>
          <div className='mx-auto flex flex-row  md:gap-[80px] gap-[60px] lg:gap-[60px]'>
              <div className='flex items-center gap-5 w-full'>
                <img 
                  src="/icons/shoppingBag.svg" 
                  alt="shopping bag"
                  className='w-[50px] md:w-[70px] xl:w-[70px]' />
                <div>
                  <p className=' text-primary md:text-2xl'>Gratis Ongkir</p>
                  <p className='text-justify hidden sm:block md:hidden lg:hidden xl:w-[250px] xl:block'>Kami menawarkan layanan yang berkualitas dengan harga yang bersahabat</p>
                </div>
              </div>
              {/* proteksi */}
              <div className='flex items-center gap-5 w-full'>
                <img 
                  src="/icons/proteksi.svg" 
                  alt="proteksi"
                  className='w-[50px] md:w-[70px]' 
                />
                <div>
                  <p className=' text-primary md:text-2xl'>Jaminan Kepuasan</p>
                  <p className='text-justify hidden sm:block md:hidden xl:block xl:w-[250px]'>Kepuasan pelanggan adalah prioritas kami</p>
                </div>
              </div>
              {/* layanan */}
              <div className='flex items-center gap-5 w-full'>
                <img 
                  src="/icons/layanan.svg" 
                  alt="layanan-icon"
                  className='w-[50px] md:w-[70px]' />
                <div>
                  <p className=' text-primary md:text-2xl'>Layanan 24 Jam</p>
                  <p className='text-justify hidden sm:block md:hidden xl:block xl:w-[250px]'>Kami siap melayani Anda kapan pun dibutuhkan</p>
                </div>
              </div>
          </div>
        </section>
        <ProdukSaya/>
        <TentangKamiSection/>
        <YangPercaya/>
        <ApaKataMereka/>
        <ArtikelCard/>
        <Footer/>
    </div>
  )
}

export default Home