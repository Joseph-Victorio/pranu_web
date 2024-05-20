import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const YangPercaya = () => {
    const settings = {
        dots: false,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: true,
        centerPadding: "50px",
      };
  return (
    <section className="px-5 sm:px-[75px]" >
         <h2 className="font-rhodium text-primary text-[30px]">Mereka Yang Percaya</h2>
      
        <div className="bg-white rounded-[30px] px-4 py-2 mt-5 shadow-md">
            <Slider {...settings} className="p-2" >
                <div className="p-3"> 
                <img src="/logo/IBN.png" alt="" className=" object-cover align-middle" />
                </div>
                <div>
                <img src="/logo/UNJ.png" alt="" className=" object-cover align-middle" />
                </div>
                <div>
                <img src="/logo/NU.png" alt="" className=" object-cover align-middle"/>
                </div>
                <div>
                <img src="/logo/Himakom.png" alt="" className=" object-cover align-middle" />
                </div>
                <div>
                <img src="/logo/Nufest.png" alt="" className=" object-cover align-middle"/>
                </div>
                
            </Slider>
        </div>
  
    </section>
  )
}

export default YangPercaya