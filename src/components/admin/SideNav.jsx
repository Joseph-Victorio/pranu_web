import { Link, NavLink } from "react-router-dom";

import { LiaHomeSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { RxExit } from "react-icons/rx";

import { useState } from "react";

const SideNav = () => {
    const [MenuClick, setMenuClick] = useState(false)

    const handleMenuClick = ()=>{
        setMenuClick(!MenuClick)
    }
  return (
    <nav className='sidenav bg-primary z-50 sm:w-[25vw] h-screen font-rhodium justify-between flex flex-col '>

        {/* NAV CONTENT */}
        <div className='nav-content flex flex-col gap-1 mt-5 p-5  '>
        {/* HEADER */}
        <img 
            src="/Logo_1.svg" 
            alt="Logo"
            className='mx-auto w-[90px]' />
        <div className="flex flex-col mt-2 ">
            {/* dashboard */}
             <NavLink
                to="/admin/dashboard"
                className={({isActive})=>(isActive ? "text-primary bg-secondary p-3 rounded-[10px]":"p-3 text-secondary")}>
                <div className="flex gap-2 items-start ">
                <LiaHomeSolid 
                    className="text-2xl font-extrabold"/>
                <p className="text-xl">Dashboard</p>
                </div>
             </NavLink>
             {/* KELOLA DATA */}
             <div className="p-3 text-secondary flex justify-between items-center">
                <div className="flex gap-2 items-start cursor-default ">
                    <FaRegUser  
                        className="text-2xl font-extrabold"/>
                    <p className="text-xl">Kelola Data</p>
                </div>
                <button
                    onClick={handleMenuClick}>
                        {MenuClick==true
                            ?
                        (<p className="text-2xl">-</p>)
                            :
                        <p className="text-2xl">+</p>}
                </button>
               
             </div>
             {/* DROPDOWN KELOLA DATA */}
             <div className={MenuClick== true? "flex flex-col gap-1":"hidden" }>
                    <NavLink
                        to='/admin/admin-list'
                        className={({isActive})=>(isActive ? "text-primary bg-secondary p-1 ml-10 rounded-[10px] ":"ml-10 p-1 text-secondary")}>

                        <p className="text-md p-1 ">Admin</p>
                    </NavLink>
                    <NavLink
                        to='/admin/client-list'
                        className={({isActive})=>(isActive ? "text-primary bg-secondary p-1 ml-10 rounded-[10px] ":"ml-10 p-1 text-secondary")}>

                        <p className="text-md p-1">Penyewa</p>
                    </NavLink>
                </div>
             {/* PRODUK */}
             <NavLink
                to="/admin/produk-list"
                className={({isActive})=>(isActive ? "text-primary bg-secondary p-3 rounded-[10px]":"p-3 text-secondary")}>
                <div className="flex gap-2 items-start ">
                <MdOutlineShoppingBag 
                    className="text-2xl font-extrabold"/>
                <p className="text-xl">Produk</p>
                </div>
             </NavLink>
             {/* ARTIKEL */}
             <NavLink
                to="/admin/artikel-list"
                className={({isActive})=>(isActive ? "text-primary bg-secondary p-3 rounded-[10px]":"p-3 text-secondary")}>
                <div className="flex gap-2 items-start ">
                <RiFileTextLine 
                    className="text-2xl font-extrabold"/>
                <p className="text-xl">Artikel</p>
                </div>
             </NavLink>
             {/* ULASAN */}
             <NavLink
                to="/admin/ulasan-list"
                className={({isActive})=>(isActive ? "text-primary bg-secondary p-3 rounded-[10px]":"p-3 text-secondary")}>
                <div className="flex gap-2 items-start ">
                <MdOutlineMessage 
                    className="text-2xl font-extrabold"/>
                <p className="text-xl">Ulasan</p>
                </div>
             </NavLink>

        </div>
        
        </div>
        <div className="">
            <Link 
                to="/admin/login"
                className="flex gap-1 items-center text-primary bg-background w-full px-5 py-3 border-primary border-r-2">
                <RxExit/>
                Keluar</Link>
        </div>
    </nav>
  )
}

export default SideNav