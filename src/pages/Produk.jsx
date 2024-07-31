import React from 'react'
import NavBiru from '../components/NavBiru'
import Footer from '../components/Footer'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Produk = () => {
  const [Genset, setGenset] = useState([])
  const [Paket, setPaket] = useState([])
  const [Stage, setStage] = useState([])
  const [Sound, setSound] = useState([])
  const [Lighting, setLighting] = useState([])
  const [Perlengkapan, setPerlengkapan] = useState([]);
  const [Led, setLed] = useState([])

  useEffect(() => {
    const fetchAllGenset = async () => {
      try {
        const res = await axios.get("https://api.pranugumproduction.com/genset.php")
        if (res.data.produkData) {
          setGenset(res.data.produkData)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllGenset()
  }, [])

  useEffect(() => {
    const fetchAllPaket = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/paket.php')
        if (res.data.produkData) {
          setPaket(res.data.produkData)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllPaket()
  }, [])

  useEffect(() => {
    const fetchAllStage = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/stage.php')
        if (res.data.produkData) {
          setStage(res.data.produkData)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllStage()
  }, [])

  useEffect(() => {
    const fetchAllSound = async () => {
      try {
        const res = await axios.get('https://api.pranugumproduction.com/sound-system.php')
        if (res.data.produkData) {
          setSound(res.data.produkData)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllSound()
  }, [])
  

    useEffect(()=>{
        const fetchAllLighting = async ()=>{
            try {
               const res = await axios.get('https://api.pranugumproduction.com/lighting.php')
               if (res.data.produkData) {
                setLighting(res.data.produkData)
              }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllLighting()
    },[])
    

    useEffect(() => {
        const fetchAllPerlengkapan = async () => {
            try {
                const res = await axios.get("https://api.pranugumproduction.com/perlengkapan.php");
                setPerlengkapan(res.data.produkData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllPerlengkapan();
    }, []);
   

    useEffect(()=>{
        const fetchAllLed = async ()=>{
            try {
               const res = await axios.get('https://api.pranugumproduction.com/led.php')
               if(res.data.produkData){
                setLed(res.data.produkData)
               }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllLed()
    },[])
  return (
    <>
      <NavBiru text={"Produk Kami"} />
      <p className='text-primary text-2xl xl:text-4xl px-5 xl:px-10 mt-5 font-rhodium'>Kategori</p>
      <div className='px-4 xl:px-10 mt-2 py-5 font-rhodium '> 
        <section className="grid  grid-cols-2 md:grid-cols-4 gap-2 ">
          {/* PAKET */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mx-auto">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px] md:h-[200px]  mx-auto">
              <img src="/kategori/paket.png" alt="" className='md:h-[190px] w-auto mx-auto'/>
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center mt-[-10px]">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] xl:text-[24px] text-primary">Paket Produk</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">{Paket.length} Produk</p>
              </div>
              <a
                href="/produk-list/paket"
                className="bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300"
              >
                <img
                  src="/icons/diagonal arrow.svg"
                  alt="arrow-go-to"
                  className="w-[10px] md:w-[20px]"
                />
              </a>
            </div>
          </div>
          {/* SOUND SYSTEM */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mx-auto">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px] mx-auto">
              <img src="/kategori/sound.png" alt="" />
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] text-primary md:text-[24px]">Sound System</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">{Sound.length} Produk</p>
              </div>
              <a
                href="/produk-list/sound-system"
                className="bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300"
              >
                <img
                  src="/icons/diagonal arrow.svg"
                  alt="arrow-go-to"
                  className="w-[10px] md:w-[20px]"
                />
              </a>
            </div>
          </div>
          {/* STAGE */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mx-auto">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px]  mx-auto">
              <img src="/kategori/stage.png" alt="" />
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] text-primary md:text-[24px]">Stage</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">{Stage.length} Produk</p>
              </div>
              <a
                href="/produk-list/stage"
                className="bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300"
              >
                <img
                  src="/icons/diagonal arrow.svg"
                  alt="arrow-go-to"
                  className="w-[10px] md:w-[20px]"
                />
              </a>
            </div>
          </div>
          {/* LED SCREEN */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mx-auto">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px]  mx-auto">
              <img src="/kategori/led.png" alt="" />
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] text-primary md:text-[24px]">LED Screen</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">{Led.length} Produk</p>
              </div>
              <a
                href="/produk-list/led"
                className="bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300"
              >
                <img
                  src="/icons/diagonal arrow.svg"
                  alt="arrow-go-to"
                  className="w-[10px] md:w-[20px]"
                />
              </a>
            </div>
          </div>
          {/* Lighting */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mt-5 mx-auto">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px]  mx-auto">
              <img src="/kategori/lighting.png" alt="" />
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] text-primary md:text-[24px]">Lighting</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">{Lighting.length} Produk</p>
              </div>
              <a
                href="/produk-list/lighting"
                className="bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300"
              >
                <img
                  src="/icons/diagonal arrow.svg"
                  alt="arrow-go-to"
                  className="w-[10px] md:w-[20px]"
                />
              </a>
            </div>
          </div>
          {/* GEnset */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mt-5 mx-auto">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px] mx-auto">
              <img src="/kategori/genset.png" alt="" />
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] text-primary md:text-[24px]">Genset</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">{Genset.length} produk</p>
              </div>
              <a
                href="/produk-list/genset"
                className="bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300"
              >
                <img
                  src="/icons/diagonal arrow.svg"
                  alt="arrow-go-to"
                  className="w-[10px] md:w-[20px]"
                />
              </a>
            </div>
          </div>
          {/* Perlengkapan */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mt-5 mx-auto">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px] mx-auto">
              <img src="/kategori/perlengkapan.png" alt="" />
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] text-primary md:text-[24px]">Perlengkapan</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">{Perlengkapan.length} Produk</p>
              </div>
              <a
                href="/produk-list/perlengkapan"
                className="bg-primary p-3 rounded-full mt-5 active:bg-secondary hover:bg-secondary transition ease-in-out duration-300"
              >
                <img
                  src="/icons/diagonal arrow.svg"
                  alt="arrow-go-to"
                  className="w-[10px] md:w-[20px]"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
      <br />
      <Footer/>
    </>
  )
}

export default Produk
