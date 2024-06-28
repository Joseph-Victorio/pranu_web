import { MdOutlinePhoneEnabled } from "react-icons/md"
import { IoCartOutline } from "react-icons/io5";


import {Link, NavLink, useLocation } from 'react-router-dom'

import { IoMdCloseCircle } from "react-icons/io";


import { useState } from "react";

const Navbar = () => {
    let location = useLocation()
    let tentang = "/tentang-kami"
    console.log(location)

    let templatePesanan = "saya mau pesan beberapa hal"
    let templatePesanan2 = "\nsaya mau ini itu beberapa hal"

    const [Menu, setMenu] = useState(false)
    const handleMenuClick = ()=>{
        setMenu(!Menu)
    }
  return (
    <>
        <nav className={location.pathname===tentang? 'hidden sm:block  font-rhodium text-white ': 'hidden sm:block bg-background font-rhodium text-primary '}>
        {/* DESKTOP */}
        <div className='sm:flex md:hidden lg:flex items-center justify-between sm:px-[50px] sm:py-[32px] '>
            {/* LOGO */}
            <div>
                <img 
                    src="/pranu_logo.svg" 
                    alt="logo"
                    className='w-[72px]' />
            </div>
            <div className='flex items-center text-[20px] gap-10 '>
           <NavLink
                to='/'
                className={({isActive}) =>(isActive ? 'border-b-2 border-primary p-1': "")}>
                Beranda
           </NavLink>
           <NavLink
                to='/tentang-kami'
                className={({isActive}) =>(isActive ? 'border-b-2 border-white p-1': "")}>
                Tentang Kami
           </NavLink>
           <NavLink
                to='/produk'
                className={({isActive}) =>(isActive ? 'border-b-2 border-primary p-1': "")}>
                Produk
           </NavLink>
           <NavLink
                to='/informasi'
                className={({isActive}) =>(isActive ? 'border-b-2 border-primary p-1': "")}>
                Informasi
           </NavLink>
           
            </div>
            <div className='text-[20px] flex gap-2'>
                <Link
                    className="text-[30px] text-primary"
                    to={""}>
                <IoCartOutline />
                </Link>
                <a href={`https://wa.me/6281295079288/?text=${templatePesanan} ${templatePesanan2}`} target='blank' className='flex gap-2 items-center'>
                    <MdOutlinePhoneEnabled
                        className={location.pathname===tentang? 'text-white' : 'text-primary'}/>
                    <p>Konsultasi</p>
                    
                </a>
            </div>
        </div>
       
        </nav>
         {/* MOBILE */}
         <div className='p-5 sm:hidden md:flex lg:hidden flex items-center justify-between'>
            <button
                className=""
                onClick={handleMenuClick}>
                <img 
                    src="/icons/menu-fries-left.svg" 
                    alt=""
                    className="w-[30px]" />

            </button>
            <img src="/pranu_logo.svg" alt="" />

            <div className='text-[20px] gap-2 flex'>
                <Link
                    className="text-[30px] text-primary"
                    to={""}>
                <IoCartOutline />
                </Link>
                <a href={`https://wa.me/6281295079288/?text=${templatePesanan} ${templatePesanan2}`} target='blank' className='flex gap-2 items-center'>
                    <MdOutlinePhoneEnabled
                        className="text-[30px] text-primary"/>
                    
                </a>
            </div>
        </div>
        {Menu 
            &&
            <div className='p-5 gap-5 bg-background text-[32px] fixed top-0 left-0 z-50 w-screen h-screen transition text-primary'>
                
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-5'>
                        <NavLink
                            to='/'
                            className={({isActive}) =>(isActive ? 'border-b-2 border-primary p-1': "text-primary")}>
                            Beranda
                        </NavLink>
                        <NavLink
                            to='/tentang-kami'
                            className={({isActive}) =>(isActive ? 'border-b-2 border-primary p-1': "text-primary")}>
                            Tentang Kami
                        </NavLink>
                        <NavLink
                            to='/produk'
                            className={({isActive}) =>(isActive ? 'border-b-2 border-primary p-1': "text-primary")}>
                            Produk
                        </NavLink>
                        <NavLink
                            to='/informasi'
                            className={({isActive}) =>(isActive ? 'border-b-2 border-primary p-1': "text-primary")}>
                            Informasi
                        </NavLink>
                    </div>
                        <div className='mx-auto '>
                        <button
                            onClick={handleMenuClick}
                            className='mx-auto'>
                            <IoMdCloseCircle className='fixed bottom-5' />
                        </button>
                        </div>
                    </div>
            </div> 
        }
    </>
  )
}

export default Navbar