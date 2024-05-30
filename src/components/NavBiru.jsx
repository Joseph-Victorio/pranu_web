import { NavLink} from 'react-router-dom'
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";


const NavBiru = ({text}) => {
    const [Menu, setMenu] = useState(false)
    const handleMenuClick = ()=>{
        setMenu(!Menu)
    }
  return (
    <>
        <div className={'bg-[url("background-desktop.png")] bg-cover text-center'}>
            <nav className='hidden sm:block  font-rhodium text-white '>
            {/* DESKTOP */}
            <div className='sm:flex items-center justify-between sm:px-[50px] sm:py-[32px] '>
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
                <div className='text-[20px]'>
                    <a href="https://wa.me/6281295079288" target='blank' className='flex gap-2 items-center'>
                        <MdOutlinePhoneEnabled
                            className='text-white'/>
                        <p>Konsultasi</p>
                        
                    </a>
                </div>
            </div>
            </nav>
            {/* MOBILE  */}
            <nav className='sm:hidden flex justify-between items-center p-5'>
              <button
                onClick={handleMenuClick}>
                <img src="/icons/menu-left-white.svg" alt="" />
              </button>
              <img 
                src="/pranu_logo.svg" 
                alt=""
                className='w-[50px]' />
                <a href="https://wa.me/6281295079288"> <MdOutlinePhoneEnabled color='white' className='text-[25px]'/></a>
            </nav>
            <p className='text-white text-2xl mt-9'>{text}</p>
            <img 
              src="/logo_tentang.svg" 
              alt=""
              className='mx-auto mt-5 pb-32' />
        </div>
        {Menu && 
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

export default NavBiru