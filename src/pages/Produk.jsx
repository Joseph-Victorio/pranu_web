import React from 'react'
import NavBiru from '../components/NavBiru'

const Produk = () => {
  return (
    <>
      <NavBiru text={"Produk Kami"}/>
      <section className='flex flex-col'>
        {/* FILTER */}
        <div className='p-5 border-r-1 border-tersier'>         
        {/* SEARCH BAR */}

        {/* FILTER BOX */}
        <div className='hidden sm:block shadow-md shadow-black sm:w-[288px] sm:h-[562px] font-rhodium p-5 rounded-md mt-10'>
          <p className='text-primary font-bold text-center'>Filter Produk</p>
          <br />
          <p className='text-primary font-bold'>
            Kategori
          </p>
          <form 
            action=""
            className='flex flex-col gap-3'>
            <div className="flex items-center gap-2">
              <input type="checkbox" name='backdrop' id='backdrop' className='border-primary' />
              <p className='text-tersier'>Backdrop</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name='genset' id='genset' className='border-primary'/>
              <p className='text-tersier'>Genset</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name='ledScreen' id='ledScreen' className='border-primary'/>
              <p className='text-tersier'>LED Screen</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name='lighting' id='lighting' className='border-primary'/>
              <p className='text-tersier'>Lighting</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name='sound' id='sound' className='border-primary'/>
              <p className='text-tersier'>Sound System</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name='stage' id='stage' className='border-primary'/>
              <p className='text-tersier'>Stage</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name='perlengkapanAcara' id='perlengkapanAcara' />
              <p className='text-tersier'>Perlengkapan Acara</p>
            </div>
            <p className='text-primary font-bold'>Harga</p>
            <div className="flex gap-5" >

              <div className='relative'>
              <input type="number" className='w-[100px] focus:outline-primary pl-7'/>
              <div className='bg-primary text-white w-7 p-1 text-[10px] absolute rounded-sm left-0 top-[1px]'>
                Rp.
                </div>
              </div>
              <div className='relative'>
              <input type="text" className='w-[100px] focus:outline-primary'/>
              <div className='bg-primary text-white w-7 p-1 text-[10px] absolute rounded-sm left-0 top-[1px]'>
                Rp.
                </div>
              </div>
            </div>
          </form>

        </div>
        </div>
      </section>
    </>
  )
}

export default Produk