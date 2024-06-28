import { useState } from 'react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

const imgBoxVariants ={
  hidden : {
    x:100
  },
  visible : {
    x:0
  }
}

const HeaderCardCarousel = () => {
    const [step, setStep] = useState(1)

  const handleLeftArrow = ()=>{
    setStep(step === 1 ? 3 : step - 1);
  }
  const handleRightArrow = ()=>{
    setStep(step ===3 ? 1 : step + 1);
    
  }
  return (
    <>
        {/* CARD CAROUSEL */}
        {step===1&&(
                <motion.div 
                    variants={imgBoxVariants}
                    initial="hidden"
                    animate="visible"
                    className='max-w-[330px] md:w-[300px] lg:w-[330px] h-[420px] border-2 border-primary rounded-[16px] p-4'>
                {/* IMG */}
                <div className='w-[300px] md:w-[270px] lg:w-[300px] mx-auto'>
                  <img src="/soundsSystem.png" alt="" />
                </div>
                {/* CONTENT */}
                <div className='flex justify-between items-center'>
                  <div className='mt-5'>
                    {/* NAMA */}
                    <p className='text-[24px] text-primary'>
                      Sound System
                    </p>
                    {/* JUMLAH PRODUK */}
                    <p className='text-tersier'>
                      150+ Produk
                    </p>
                  </div>
                  <Link 
                    to='/produk/id'
                    className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
                    <img 
                      src="/icons/diagonal arrow.svg" 
                      alt="arrow-go-to"
                      className='w-[20px]' />
                  </Link>
                </div>
              </motion.div>
            )}
            {step===2&&(
                <motion.div 
                    variants={imgBoxVariants}
                    initial="hidden"
                    animate="visible"
                    className='max-w-[330px] h-[420px] border-2 border-primary rounded-[16px] p-4'>
                {/* IMG */}
                <div className='w-[300px] mx-auto'>
                  <img src="/ligthing.png" alt="" />
                </div>
                {/* CONTENT */}
                <div className='flex justify-between items-center'>
                  <div className='mt-5'>
                    {/* NAMA */}
                    <p className='text-[24px] text-primary'>
                      Lighting
                    </p>
                    {/* JUMLAH PRODUK */}
                    <p className='text-tersier'>
                      150+ Produk
                    </p>
                  </div>
                  <Link 
                    to='/produk/id'
                    className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
                    <img 
                      src="/icons/diagonal arrow.svg" 
                      alt="arrow-go-to"
                      className='w-[20px]' />
                  </Link>
                </div>
              </motion.div>
            )}
            {step===3&&(
                <motion.div
                    variants={imgBoxVariants}
                    initial="hidden"
                    animate="visible"
                    className='max-w-[330px] h-[420px] border-2 border-primary rounded-[16px] p-4'>
                {/* IMG */}
                <div className='w-[300px] mx-auto'>
                  <img src="/soundsSystem.png" alt="" />
                </div>
                {/* CONTENT */}
                <div className='flex justify-between items-center'>
                  <div className='mt-5'>
                    {/* NAMA */}
                    <p className='text-[24px] text-primary'>
                      Sound System
                    </p>
                    {/* JUMLAH PRODUK */}
                    <p className='text-tersier'>
                      150+ Produk
                    </p>
                  </div>
                  <Link 
                    to='/produk/id'
                    className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
                    <img 
                      src="/icons/diagonal arrow.svg" 
                      alt="arrow-go-to"
                      className='w-[20px]' />
                  </Link>
                </div>
              </motion.div>
            )}
            
            {/* BUTTON KIRI KANAN */}
            <div className='flex items-center gap-2 mt-4'>
              <button
                onClick={handleLeftArrow}
                className='rounded-full bg-primary p-3 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
                  <img src="/icons/left.svg" alt="" />
              </button>
              <button
                onClick={handleRightArrow}
                className='rounded-full bg-primary p-3 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
                  <img src="/icons/right.svg" alt="" />
              </button>
            </div>
    </>
  )
}

export default HeaderCardCarousel