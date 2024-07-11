import React from 'react'
import NavBiru from '../components/NavBiru'

import { useState, useEffect } from 'react'

const Produk = () => {
  return (
    <>
      <NavBiru text={"Produk Kami"} />
      <p className='text-primary text-2xl xl:text-4xl px-5 xl:px-10 mt-5 font-rhodium'>Kategori</p>
      <div className='px-4 xl:px-10 mt-5 py-5 font-rhodium'> 
        <section className="grid  grid-cols-2 md:grid-cols-4 gap-2 ">
         
          {/* PAKET */}
          {/* CARD */}
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 ">
            {/* IMG */}
            <div className="w-[120px] md:w-[220px]  mx-auto">
              <img src="/kategori/sound.png" alt="" />
            </div>
            {/* CONTENT */}
            <div className="flex justify-between items-center">
              <div className="mt-5">
                {/* NAMA */}
                <p className="text-[12px] xl:text-[24px] text-primary">Paket Produk</p>
                {/* JUMLAH PRODUK */}
                <p className="text-tersier text-[10px]">150+ Produk</p>
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
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 ">
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
                <p className="text-tersier text-[10px]">150+ Produk</p>
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
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 ">
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
                <p className="text-tersier text-[10px]">150+ Produk</p>
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
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 ">
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
                <p className="text-tersier text-[10px]">150+ Produk</p>
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
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mt-5">
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
                <p className="text-tersier text-[10px]">150+ Produk</p>
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
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mt-5">
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
                <p className="text-tersier text-[10px]">150+ Produk</p>
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
          <div className="w-[150px] md:w-[300px] lg:w-[270px] border-2 border-primary rounded-[16px] p-4 mt-5">
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
                <p className="text-tersier text-[10px]">150+ Produk</p>
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
    </>
  );
}

export default Produk