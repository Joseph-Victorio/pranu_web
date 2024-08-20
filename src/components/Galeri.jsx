import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Galeri = () => {
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
  
  }
  return (
    <section className="sm:p-8 p-5 font-rhodium">
      <p className="text-primary text-3xl mb-5">Galeri</p>
      <a href={'/galeri'}>
          <p className="text-tersier mb-5 text-right hover:text-gray-600 ease-in-out duration-300">Lihat semua &#62;</p>
        </a>
      <Slider {...settings}>
        {/* CARD */}
        <div className="p-1">
          <div className="border-2 border-primary rounded-xl p-2 md:w-[300px] xl:w-[350px] ">
            <img 
              src="/galeri/YOTNC1.png" 
              alt=""
              className="w-full" />
          </div>
        </div>
        {/* CARD */}
        <div className="p-1">
          <div className="border-2 border-primary rounded-xl p-2 md:w-[300px] xl:w-[350px] ">
            <img 
              src="/galeri/YOTNC2.png" 
              alt=""
              className="w-full" />
          </div>
        </div>
        {/* CARD */}
        <div className="p-1">
          <div className="border-2 border-primary rounded-xl p-2 md:w-[300px] xl:w-[350px] ">
            <img 
              src="/galeri/YOTNC3.png" 
              alt=""
              className="w-full h-[240px] bg-cover object-cover rounded-md" />
          </div>
        </div>
        
      </Slider>
    </section>
  )
}

export default Galeri