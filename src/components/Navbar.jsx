import { MdOutlinePhoneEnabled } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation()
    let tentang = "/tentang-kami"
    console.log(location)

    let templatePesanan = "saya mau pesan beberapa hal"
    let templatePesanan2 = "\nsaya mau ini itu beberapa hal"
  return (
    <nav className={location.pathname===tentang? 'hidden sm:block  font-rhodium text-white ': 'hidden sm:block bg-background font-rhodium text-primary '}>
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
                <a href={`https://wa.me/6281295079288/?text=${templatePesanan} ${templatePesanan2}`} target='blank' className='flex gap-2 items-center'>
                    <MdOutlinePhoneEnabled
                        className={location.pathname===tentang? 'text-white' : 'text-primary'}/>
                    <p>Konsultasi</p>
                    
                </a>
            </div>
        </div>
        {/* MOBILE */}
        <div className='sm:hidden flex items-center justify-between'>

        </div>
    </nav>
  )
}

export default Navbar