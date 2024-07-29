import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import axios from 'axios';

const imgBoxVariants = {
  hidden: {
    x: 100
  },
  visible: {
    x: 0
  }
};

const HeaderCardCarousel = () => {
  const [Paket, setPaket] = useState([]);
  const [Lighting, setLighting] = useState([]);
  const [Stage, setStage] = useState([]);
  const [step, setStep] = useState(1);

  const handleLeftArrow = () => {
    setStep(step === 1 ? 3 : step - 1);
  };

  const handleRightArrow = () => {
    setStep(step === 3 ? 1 : step + 1);
  };

 

  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/paket.php');
        setPaket(res.data.produkData);
      } catch (error) {
        console.error('Error fetching Paket data:', error);
      }
    };
    

    fetchPaket();
    
    
  }, []);
  useEffect(()=>{
    const fetchLighting = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/lighting.php');
        setLighting(res.data.produkData);
      } catch (error) {
        console.error('Error fetching lighting data:', error);
      }
    };
    fetchLighting();
  },[])
  useEffect(()=>{
    const fetchStage = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/stage.php');
        setStage(res.data);
      } catch (error) {
        console.error('Error fetching stage data:', error);
      }
    };
    fetchStage();
  },[])

  return (
    <>
      {/* CARD CAROUSEL */}
      {step === 1 && (
        <motion.div
          variants={imgBoxVariants}
          initial="hidden"
          animate="visible"
          className='max-w-[330px] md:w-[300px] lg:w-[330px] h-[350px] border-2 border-primary rounded-[16px] p-4'>
          {/* IMG */}
          <div className='w-[250px] md:w-[270px] lg:w-[300px]  mx-auto'>
            <img src="/kategori/paket.png" alt="Paket Produk" className='h-[200px] mx-auto w-full' />
          </div>
          {/* CONTENT */}
          <div className='flex justify-between items-center'>
            <div className='mt-5'>
              {/* NAMA */}
              <p className='text-[24px] text-primary'>
                Paket Produk
              </p>
              {/* JUMLAH PRODUK */}
              <p className='text-tersier'>
                {Paket.length} produk
              </p>
            </div>
            <a
              href='/produk-list/Paket'
              className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
              <img
                src="/icons/diagonal arrow.svg"
                alt="arrow-go-to"
                className='w-[20px]' />
            </a>
          </div>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div
          variants={imgBoxVariants}
          initial="hidden"
          animate="visible"
          className='max-w-[330px] h-[350px] border-2 border-primary rounded-[16px] p-4'>
          {/* IMG */}
          <div className='w-[250px] mx-auto'>
            <img src="/kategori/lighting.png" alt="Lighting" />
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
                {Lighting.length} produk
              </p>
            </div>
            <a
              href='/produk-list/lighting'
              className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
              <img
                src="/icons/diagonal arrow.svg"
                alt="arrow-go-to"
                className='w-[20px]' />
            </a>
          </div>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div
          variants={imgBoxVariants}
          initial="hidden"
          animate="visible"
          className='max-w-[330px] h-[350px] border-2 border-primary rounded-[16px] p-4'>
          {/* IMG */}
          <div className='w-[250px] mx-auto'>
            <img src="/kategori/stage.png" alt="Stage" />
          </div>
          {/* CONTENT */}
          <div className='flex justify-between items-center'>
            <div className='mt-5'>
              {/* NAMA */}
              <p className='text-[24px] text-primary'>
                Stage
              </p>
              {/* JUMLAH PRODUK */}
              <p className='text-tersier'>
                {Stage.length} produk
              </p>
            </div>
            <a
              href='/produk-list/stage'
              className='bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
              <img
                src="/icons/diagonal arrow.svg"
                alt="arrow-go-to"
                className='w-[20px]' />
            </a>
          </div>
        </motion.div>
      )}

      {/* BUTTON KIRI KANAN */}
      <div className='flex items-center gap-2 mt-4'>
        <button
          onClick={handleLeftArrow}
          className='rounded-full bg-primary p-3 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
          <img src="/icons/left.svg" alt="Left Arrow" />
        </button>
        <button
          onClick={handleRightArrow}
          className='rounded-full bg-primary p-3 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300'>
          <img src="/icons/right.svg" alt="Right Arrow" />
        </button>
      </div>
    </>
  );
};

export default HeaderCardCarousel;
