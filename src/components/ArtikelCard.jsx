import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import DiagonalBtn2 from "./DiagonalBtn2";


const ArtikelCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        className: "center",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "60px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              arrows: false,
            }
          }
        ]
      
      };
  return (
    <section className='font-rhodium p-5 sm:px-[75px] mb-10'>
        <h2 className='text-primary text-[24px] sm:text-[40px] text-center mb-5'>
            Artikel
        </h2>
    
      <Slider {...settings} className="object-fit">
        {/* cards */}
        <div className="p-1">
          <div className=" card  border-2 border-primary bg-white rounded-[30px] p-5 shadow-sm ">
            {/* PROFILE */}
            <div className="text-center">
            <div className='relative mb-10'>
                <img 
                    src="/kampanye.png" 
                    alt=""
                    className='w-[250px] mx-auto' />
                   <Link
                    to='/tentang-kami'
                    className='absolute bottom-[-20px] left-[50%] translate-x-[-50%] '
                    >
                        <DiagonalBtn2 />
                   </Link>
                </div>
                {/* NAMA & ISI*/}
                <p className="sm:text-[20px] text-primary">Kampanye Akbar Anies & Muhaimin</p>
                <br />
                <p className="text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem, voluptas vel fugiat totam modi tenetur deleniti eum eveniet ullam.</p>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="p-1">
          <div className=" card  border-2 border-primary bg-white rounded-[30px] p-5 shadow-sm ">
            {/* PROFILE */}
            <div className="text-center">
            <div className='relative mb-10'>
                <img 
                    src="/kampanye.png" 
                    alt=""
                    className='w-[250px] mx-auto rounded-xl' />
                   <Link
                    to='/tentang-kami'
                    className='absolute bottom-[-20px] left-[50%] translate-x-[-50%] '
                    >
                        <DiagonalBtn2 />
                   </Link>
                </div>
                {/* NAMA & ISI*/}
                <p className="sm:text-[20px] text-primary">Kampanye Akbar Anies & Muhaimin</p>
                <br />
                <p className="text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem, voluptas vel fugiat totam modi tenetur deleniti eum eveniet ullam.</p>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="p-1">
          <div className=" card  border-2 border-primary bg-white rounded-[30px] p-5 shadow-sm ">
            {/* PROFILE */}
            <div className="text-center">
            <div className='relative mb-10'>
                <img 
                    src="/kampanye.png" 
                    alt=""
                    className='w-[250px] mx-auto' />
                   <Link
                    to='/tentang-kami'
                    className='absolute bottom-[-20px] left-[50%] translate-x-[-50%] '
                    >
                        <DiagonalBtn2 />
                   </Link>
                </div>
                {/* NAMA & ISI*/}
                <p className="sm:text-[20px] text-primary">Kampanye Akbar Anies & Muhaimin</p>
                <br />
                <p className="text-center line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem, voluptas vel fugiat totam modi tenetur deleniti eum eveniet ullam.</p>
            </div>
          </div>
        </div>
        
       
        
      </Slider>

        
    </section>
  )
}

export default ArtikelCard