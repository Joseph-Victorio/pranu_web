

import Footer from '../components/Footer'
import Galeri from '../components/Galeri';
import NavBiru from '../components/NavBiru';

const TentangKami = () => {

  return (
    <>
      <section className='font-rhodium'>
        {/* HEADER */}
        <NavBiru text={'Tentang Kami'} />
        {/* VIDEO SECTION */}
        <section className='flex sm:flex-row md:flex-col xl:flex-row flex-col p-5 items-center gap-5 mt-20'>
          <video 
            src="/beach.mp4"
            className='border-4 border-primary rounded-xl p-1 sm:w-[528px]'
            controls
            ></video>
            <div className='p-5 sm:p-10'>
              <p className='w-[40px] text-nowrap text-2xl text-primary border-b-4 border-secondary mb-5'>Pranugum Production</p>
              <p className='text-justify'>Pranugum Production adalah sebuah perusahaan independen yang berdedikasi dalam menyediakan peralatan dan layanan sewa untuk keperluan acara yang beragam. Didirikan pada bulan Februari tahun 2022, Pranugum Production merupakan hasil dari gagasan kreatif para pemuda yang memiliki antusiasme terhadap industri acara dan bermimpi untuk menciptakan sesuatu yang istimewa dan luar biasa.</p>
              <br />
              <p className='text-justify'>Pranugum Production telah mengabdikan diri untuk menghadirkan solusi terbaik bagi kebutuhan produksi acara dengan menyediakan layanan penyewaan panggung, pencahayaan, sistem suara, LED, dan peralatan lainnya yang diperlukan untuk berbagai jenis acara. Pranugum Production tidak hanya menjadi mitra dalam menyediakan peralatan acara, tetapi juga menjadi bagian dari setiap momen spesial yang diimpikan oleh kliennya.</p>
            </div>
        </section>
        {/* VISI MISI */}
        <section className='flex flex-col sm:flex-row  sm:gap-24 gap-5 p-5 sm:mt-24 mx-auto justify-center'>
          {/* VISI */}
          <div className='p-5 bg-secondary border-2 border-primary rounded-xl sm:w-[350px] mx-auto sm:mx-0'>
              <p className='text-center text-2xl text-primary'>
                  Visi
              </p>
              <p className='text-center text-lg text-primary'>
              Menjadi mitra terpercaya dalam menyediakan layanan dan perlengkapan untuk beragam acara serta berkomitmen untuk memenuhi setiap kebutuhan teknis dan produksi dengan pelayanan dan peralatan terbaik, sehingga setiap acara yang diimpikan dapat terwujud.
              </p>
          </div>
          {/* MISI */}
          <div className='p-5 bg-secondary border-2 border-primary rounded-xl  sm:w-[350px] mx-auto sm:mx-0'>
              <p className='text-center text-2xl text-primary'>
                  Misi
              </p>
              <div className=' text-primary text-center text-lg p-5'>
                <p>Mampu mewujudkan ide-ide kreatif dengan sumber daya manusia yang kompeten, serta menyediakan pilihan produk dengan kualitas terbaik untuk memastikan kepuasan pelanggan.</p>
              </div>
          </div>
        </section>
        {/* WHY US? */}
        <section className='p-5 mx-auto sm:mt-10'>
          <p className='text-primary text-3xl text-center'>Mengapa Harus Kami?</p>
          <div className='flex flex-col sm:w-[420px] md:w-[600px] mx-auto  mt-10 gap-4'>
            {/* 1 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/1.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-justify text-sm md:text-2xl'>Affordable, layanan kami terjangkau, memungkinkan pelanggan memenuhi kebutuhan acara tanpa biaya besar.</p>
            </div>
            {/* 2 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/2.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-justify text-sm md:text-2xl'>Professional, tim kami terdiri dari tenaga kerja yang profesional dan terlatih dengan baik dalam menyediakan layanan produksi acara.</p>
            </div>
            {/* 3 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/3.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-justify text-sm md:text-2xl'>Good Service, kami menawarkan layanan pelanggan yang ramah, responsif, dan berkualitas tinggi, mulai dari pemesanan hingga penyelesaian acara.</p>
            </div>
            {/* 4 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/4.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-justify text-sm md:text-2xl'>Trusted, sebagai penyedia jasa terpercaya, kami telah memenangkan kepercayaan pelanggan dengan kualitas layanan dan reputasi yang baik.</p>
            </div>
          </div>
        </section>
      </section>
      <Galeri/>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer/>
    </>
  )
}

export default TentangKami