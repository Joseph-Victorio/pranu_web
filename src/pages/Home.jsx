

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
    <div>
      <Navbar/>
      {/* HEADER */}
        <section className='flex flex-col sm:flex-row min-w-fit font-rhodium items-center mt-10 mb-10'>
          {/* KIRI */}
          <div className='p-5 sm:p-[75px] sm:w-1/2 flex-1'>
            <h1 className='sm:text-[57px] text-3xl text-primary'>Prangum Production</h1>
            <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem iste porro reiciendis debitis pariatur autem! Praesentium aliquid maxime quo dolorum non, culpa excepturi odit officia cumque a, eligendi fugit.</p>
            <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem iste porro reiciendis debitis pariatur autem! Praesentium aliquid maxime quo dolorum non, culpa excepturi odit officia cumque a, eligendi fugit.</p>
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
        <a href="whatsapp://send?text=http://localhost:5173/tentang-kami" data-action="share/whatsapp/share">Share ke whatsapp </a>
        <Marquee />
        {/* KENAPA PILIH SINI SECTION */}
        <section className='p-5 sm:p-[75px] font-rhodium'>
          <div className='mx-auto  flex flex-row overflow-x-scroll sm:overflow-hidden gap-5'>
              <div className='flex items-center gap-5'>
                <img src="/icons/shoppingBag.svg" alt="" />
                <div>
                  <p className=' text-primary'>Gratis Ongkir</p>
                  <p className='text-justify hidden sm:block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, aliquam.</p>
                </div>
              </div>
              {/* proteksi */}
              <div className='flex items-center gap-5'>
                <img src="/icons/proteksi.svg" alt="" />
                <div>
                  <p className=' text-primary'>Jaminan Kepuasan</p>
                  <p className='text-justify hidden sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, est?</p>
                </div>
              </div>
              {/* layanan */}
              <div className='flex items-center gap-5'>
                <img src="/icons/layanan.svg" alt="" />
                <div>
                  <p className=' text-primary'>Layanan 24 Jam</p>
                  <p className='text-justify hidden sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, est?</p>
                </div>
              </div>
          </div>
        </section>
        {/* <ProdukSaya/> */}
        <TentangKamiSection/>
        <YangPercaya/>
        <ApaKataMereka/>
        <ArtikelCard/>
        <Footer/>
    </div>
  )
}

export default Home