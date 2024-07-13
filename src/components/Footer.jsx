import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary  ">
        <div className="flex flex-col p-5 sm:p-[75px] sm:flex-row justify-between font-rhodium gap-[40px]">
            {/* LOGO */}
            <div className="mx-auto sm:mx-0 flex flex-1 flex-col gap-2 items-center">
                <div className="flex items-center md:flex-col lg:flex-row xl:flex-row ">
                    <img src="/logo/footerLogo.svg" alt="logo" className="w-[237px]"/>
                    
                </div>
                <div>
                    <p className="text-justify items-center text-white md:w-[150px] lg:w-[200px]">Pranugum Production adalah sebuah perusahaan yang berdedikasi dalam menyediakan peralatan dan layanan sewa untuk keperluan acara</p>
                </div>
            </div>
            {/* NAV */}
            <div>
                <h2 className="text-[24px] text-white mb-5">PRANUGUM PRODUCTION</h2>
                <div className="flex flex-col gap-5">
                    <a
                        href='/tentang-kami'
                        className="text-white">
                            Tentang Kami
                    </a>
                    <a
                        href='/produk'
                        className="text-white">
                            Produk
                    </a>
                    <a
                        href='/#artikel'
                        className="text-white">
                            Artikel
                    </a>
                    <a
                        href='/#ulasan'
                        className="text-white">
                        Ulasan
                    </a>
                </div>
            </div>
            {/* PANDUAN */}
            <div>
                <h2 className="text-[24px] text-white mb-5">BANTUAN & PANDUAN</h2>
                <div className="flex flex-col gap-5">
                    <a
                        href='/informasi'
                        className="text-white">
                            Cara Pesan
                    </a>
                    <a
                        href='/informasi'
                        className="text-white">
                            Syarat & Ketentuan
                    </a>
                    <a
                        href='/informasi'
                        className="text-white">
                            FAQs
                    </a>
                    <a
                        href='/informasi'
                        className="text-white">
                        Kontak
                    </a>
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