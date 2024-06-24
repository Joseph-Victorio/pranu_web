import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary  ">
        <div className="flex flex-col p-5 sm:p-[75px] sm:flex-row justify-between font-rhodium gap-[40px]">
            {/* LOGO */}
            <div className="mx-auto sm:mx-0 flex flex-1 flex-col gap-2 items-center">
                <div className="flex items-center ">
                    <img src="/pranu_logo.svg" alt="logo" className="w-[137px]"/>
                    <p className="text-[18px] text-white text-center font-bold ">PRANUGUM <br />PRODUCTION</p>
                </div>
                <div>
                    <p className="text-justify items-center text-white">Pranugum Production adalah sebuah perusahaan yang berdedikasi dalam menyediakan peralatan dan layanan sewa untuk keperluan acara</p>
                </div>
            </div>
            {/* NAV */}
            <div>
                <h2 className="text-[24px] text-white mb-5">PRANUGUM PRODUCTION</h2>
                <div className="flex flex-col gap-5">
                    <Link
                        to='/tentang-kami'
                        className="text-white">
                            Tentang Kami
                    </Link>
                    <Link
                        to='/produk'
                        className="text-white">
                            Produk
                    </Link>
                    <Link
                        to='/artikel'
                        className="text-white">
                            Artikel
                    </Link>
                    <Link
                        to='/ulasan'
                        className="text-white">
                        Ulasan
                    </Link>
                </div>
            </div>
            {/* PANDUAN */}
            <div>
                <h2 className="text-[24px] text-white mb-5">BANTUAN & PANDUAN</h2>
                <div className="flex flex-col gap-5">
                    <Link
                        to='/tentang-kami'
                        className="text-white">
                            Cara Pesan
                    </Link>
                    <Link
                        to='/produk'
                        className="text-white">
                            Syarat & Ketentuan
                    </Link>
                    <Link
                        to='/artikel'
                        className="text-white">
                            FAQs
                    </Link>
                    <Link
                        to='/ulasan'
                        className="text-white">
                        Kontak
                    </Link>
                </div>
            </div>
            {/* SOCIAL MEDIA */}
            <div>
                <h2 className="text-[24px] text-white mb-5">SOCIAL MEDIA</h2>
                <div className="flex gap-2">
                    <Link><img src="/icons/insta.svg" alt="" /></Link>
                    <Link><img src="/icons/facebook.svg" alt="" /></Link>
                    <Link><img src="/icons/wa.svg" alt="" /></Link>
                </div>
            </div>
        </div>
        <hr className="border-1" />
        <p className="text-center p-5 sm:text-[14px] text-white font-rhodium ">Copyright &copy; 2024 Pranugum Production</p>
    </footer>
  )
}

export default Footer