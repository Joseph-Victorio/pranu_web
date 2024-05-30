

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
        <section className='flex sm:flex-row flex-col p-5 items-center gap-5 mt-20'>
          <video 
            src="/beach.mp4"
            className='border-4 border-primary rounded-xl p-1 sm:w-[528px]'
            controls
            ></video>
            <div className='p-5 sm:p-10'>
              <p className='w-[40px] text-nowrap text-2xl text-primary border-b-4 border-secondary mb-5'>Pranugum Production</p>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat voluptas animi eligendi inventore, accusantium molestiae iste assumenda consequatur sunt, nam, at fugit nisi ratione aspernatur expedita qui sint neque.</p>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat voluptas animi eligendi inventore, accusantium molestiae iste assumenda consequatur sunt, nam, at fugit nisi ratione aspernatur expedita qui sint neque.</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem cumque facere? Iste eveniet repellat, neque eius tempore aliquid esse doloribus laudantium sapiente numquam expedita velit minima quam sit amet.
              </p>
          </div>
          {/* MISI */}
          <div className='p-5 bg-secondary border-2 border-primary rounded-xl  sm:w-[350px] mx-auto sm:mx-0'>
              <p className='text-center text-2xl text-primary'>
                  Misi
              </p>
              <div className=' text-primary text-justify text-sm p-5'>
                <p>1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, et numquam? Eveniet voluptatum et sapiente?</p>
                <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odio?</p>
                <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odio?</p>
                <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, odio?</p>
              </div>
          </div>
        </section>
        {/* WHY US? */}
        <section className='p-5 mx-auto sm:mt-10'>
          <p className='text-primary text-3xl text-center'>Mengapa Harus Kami?</p>
          <div className='flex flex-col sm:w-[420px] mx-auto mt-10'>
            {/* 1 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/1.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-2xl'>Banyak Menangani Berbagai Event</p>
            </div>
            {/* 2 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/2.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-2xl'>Melayani Kapanpun Anda Membutuhkan.</p>
            </div>
            {/* 3 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/3.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-2xl'>Komitmen pada Kepuasan Pelanggan.</p>
            </div>
            {/* 4 */}
            <div className='flex gap-3 items-center'>
              <img 
                src="/icons/4.svg" 
                alt=""
                className='w-[40px]' />
                <p className='text-primary text-2xl'>Kesempurnaan Dalam Detail.</p>
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