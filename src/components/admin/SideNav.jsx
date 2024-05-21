import { NavLink } from "react-router-dom";

import { LiaHomeSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";

const SideNav = () => {
    const [MenuClick, setMenuClick] = useState(false)
  return (
    <nav className='sidenav bg-primary z-50 sm:w-[25vw] h-screen p-5 font-rhodium'>
        {/* HEADER */}
        <img 
            src="/Logo_1.svg" 
            alt="Logo"
            className='mx-auto w-[100px]' />
        <div className='nav-content flex flex-col gap-5 mt-10'>
            {/* dashboard */}
             <NavLink
                to="/admin/dashboard"
                className={({isActive})=>(isActive ? "text-primary bg-secondary p-3 rounded-[10px]":"text-secondary")}>
                <div className="flex gap-2 items-start ">
                <LiaHomeSolid 
                    className="text-2xl font-extrabold"/>
                <p className="text-xl">Dashboard</p>
                </div>
             </NavLink>
             {/* KELOLA DATA */}
             <div className="p-3 text-secondary flex justify-between items-center">
                <div className="flex gap-2 items-start ">
                    <FaRegUser  
                        className="text-2xl font-extrabold"/>
                    <p className="text-xl">Kelola Data</p>
                </div>
                <p className="text-2xl">+</p>
             </div>
             {/* PRODUK */}
             {/* ARTIKEL */}
             {/* ULASAN */}
        </div>
    </nav>
  )
}

export default SideNav