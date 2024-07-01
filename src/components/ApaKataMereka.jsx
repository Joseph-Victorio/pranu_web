import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import axios from "axios";




const ApaKataMereka = () => {
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
  const [ulasan, setUlasan] = useState('')

  useEffect(()=>{
    const fetchAllUlasan = async ()=>{
      try {
        const res = await axios.get('http://localhost:8800/ulasan')
        setUlasan(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllUlasan()
  })
  return (
    <section className='font-rhodium p-5 sm:p-[75px]'>
        <h2 className='text-primary text-[24px] sm:text-[40px] text-center mb-5'>
            Apa Kata Mereka?
        </h2>
    
      <Slider {...settings} >
        {/* cards */}
        {Array.isArray(ulasan) && ulasan.map(ul=>(
          <div className="p-1" >
          <div className=" h-[300px] border-2 border-primary rounded-[30px] p-5 " key={ul.id}>
            {/* PROFILE */}
            <div className="text-center">
              <img 
                src={ul.foto === "" ?'/Logo_1.svg' :`../backend/uploads/ulasan/${ul.foto}`} 
                alt=""
                className="rounded-full w-[80px] mx-auto" />
                {/* NAMA */}
                <p className="sm:text-[30px] text-primary">{ul.nama}</p>
            </div>
            <p className="text-justify text-[10px] mt-5 line-clamp-5">{ul.ulasan}</p>
          </div>
        </div>
        ))}
        
      </Slider>

        
    </section>
  )
}

export default ApaKataMereka