import { Link, NavLink } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingBag, MdOutlinePhotoSizeSelectActual, MdOutlineMessage } from "react-icons/md";
import { RiFileTextLine, RiMenu2Fill } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

const SideNav = () => {
    const [MenuClick, setMenuClick] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isKelolaDataOpen, setKelolaDataOpen] = useState(false);

    const toggleClick = () => {
        setToggle(!toggle);
    };

    const handleMenuClick = () => {
        setMenuClick(!MenuClick);
    };

    const logout = async () => {
        await axios.post('https://api.pranugumproduction.com/logout.php', {
            username: 'pranugum',
            login: "FALSE"
        });
    };

    const toggleKelolaData = () => {
        setKelolaDataOpen(!isKelolaDataOpen);
    };

    return (
        <>
            <nav className='hidden sidenav bg-primary z-50 sm:w-[20vw] h-auto font-rhodium justify-between md:flex md:w-[30vw] lg:w-[20vw] xl:flex flex-col fixed left-0 top-0 bottom-0'>
                <div className='nav-content flex flex-col gap-1 mt-5 p-5'>
                    <img src="/logo/PRANUGUMBiruPutih.png" alt="Logo" className='mx-auto w-[90px]' />
                    <div className="flex flex-col mt-2">
                        <NavLink
                            to="/admin/dashboard"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-start ">
                                <LiaHomeSolid className="text-2xl font-extrabold" />
                                <p className="text-xl">Dashboard</p>
                            </div>
                        </NavLink>
                        <div>
                            <button
                                onClick={toggleKelolaData}
                                className="flex items-start p-3 text-secondary  rounded-[10px] w-full text-left"
                            >
                                <div className="flex justify-between items-center gap-5">
                                    <div className="flex gap-1">
                                    <FaRegUser className="text-2xl font-extrabold" />
                                    <p className="text-xl ml-2">Kelola Data</p>
                                    </div>
                                    {isKelolaDataOpen && (
                                        <p>-</p>
                                    )}
                                    {!isKelolaDataOpen && (
                                        <p>+</p>
                                    )}
                                </div>
                            </button>
                            {isKelolaDataOpen && (
                                <div className="flex flex-col ml-6">
                                    <NavLink
                                        to="/admin/pertanyaan-pengaduan"
                                        className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                                        <p>Pertanyaan dan Pengaduan</p>
                                    </NavLink>
                                    <NavLink
                                        to="/admin/penyewa"
                                        className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                                        <p>Penyewa</p>
                                    </NavLink>
                                    <NavLink
                                        to="https://dashboard.sandbox.midtrans.com/beta/transactions"
                                        className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                                        <p>Riwayat Pembayaran</p>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink
                            to="/admin/produk-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-start ">
                                <MdOutlineShoppingBag className="text-2xl font-extrabold" />
                                <p className="text-xl">Produk</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/admin/artikel-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-start ">
                                <RiFileTextLine className="text-2xl font-extrabold" />
                                <p className="text-xl">Artikel</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/admin/ulasan-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-start ">
                                <MdOutlineMessage className="text-2xl font-extrabold" />
                                <p className="text-xl">Ulasan</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/admin/galeri-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-start ">
                                <MdOutlinePhotoSizeSelectActual className="text-2xl font-extrabold" />
                                <p className="text-xl">Galeri</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="">
                    <Link
                        to="/admin/login"
                        className="flex gap-1 items-center text-primary bg-background w-full px-5 py-3 border-primary border-r-2"
                        onClick={logout}
                    >
                        <RxExit />
                        Keluar
                    </Link>
                </div>
            </nav>
            <nav className="p-2 bg-primary w-full sm:hidden flex justify-between items-center fixed top-0 left-0 right-0">
                <div>
                    <button
                        className=""
                        onClick={toggleClick}
                        aria-label="Toggle Menu"
                    >
                        <RiMenu2Fill className="text-white text-xl" />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="/Logo_1.svg"
                        alt="Logo"
                        className='w-[60px]'
                    />
                </div>
                <div>
                    <Link
                        to="/admin/login"
                        className="flex gap-1 items-center text-primary px-5 py-3 border-primary border-r-2"
                        onClick={logout}
                    >
                        <RxExit className="text-white text-xl" />
                        <span className="text-white">Keluar</span>
                    </Link>
                </div>
            </nav>
            {toggle && (
                <div className="p-5 gap-5 bg-primary text-[32px] fixed top-0 left-0 z-50 w-screen h-screen transition text-white">
                    <div className="flex flex-col mx-auto w-full mt-32">
                        <NavLink
                            to="/admin/dashboard"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-center ">
                                <LiaHomeSolid
                                    className="text-3xl font-extrabold"
                                />
                                <p className="text-3xl">Dashboard</p>
                            </div>
                        </NavLink>
                        <div>
                            <button
                                onClick={toggleKelolaData}
                                className="flex items-start p-3 text-secondary  rounded-[10px] w-full text-left"
                            >
                                <FaRegUser className="text-3xl font-extrabold" />
                                <p className="text-3xl ml-2">Kelola Data</p>
                            </button>
                            {isKelolaDataOpen && (
                                <div className="flex flex-col ml-6">
                                    <NavLink
                                        to="/admin/pertanyaan-pengaduan"
                                        className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                                        <p>Pertanyaan dan Pengaduan</p>
                                    </NavLink>
                                    <NavLink
                                        to="/admin/penyewa"
                                        className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                                        <p>Penyewa</p>
                                    </NavLink>
                                    <NavLink
                                        to="https://dashboard.sandbox.midtrans.com/beta/transactions"
                                        className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                                        <p>Riwayat Pembayaran</p>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink
                            to="/admin/produk-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-center ">
                                <MdOutlineShoppingBag
                                    className="text-3xl font-extrabold"
                                />
                                <p className="text-3xl">Produk</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/admin/artikel-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-center ">
                                <RiFileTextLine
                                    className="text-3xl font-extrabold"
                                />
                                <p className="text-3xl">Artikel</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/admin/ulasan-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-center ">
                                <MdOutlineMessage
                                    className="text-3xl font-extrabold"
                                />
                                <p className="text-3xl">Ulasan</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/admin/galeri-list"
                            className={({ isActive }) => (isActive ? "text-primary bg-secondary p-3 rounded-[10px]" : "p-3 text-secondary")}>
                            <div className="flex gap-2 items-center ">
                                <MdOutlinePhotoSizeSelectActual
                                    className="text-3xl font-extrabold"
                                />
                                <p className="text-3xl">Galeri</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='mx-auto w-[50px]'>
                        <button
                            onClick={toggleClick}
                            className='mx-auto'>
                            <IoMdCloseCircle className='fixed bottom-5 ' />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SideNav;
