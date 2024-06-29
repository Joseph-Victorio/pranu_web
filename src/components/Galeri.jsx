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
    <section className="sm:p-8 p-5">
      <p className="text-primary text-3xl mb-7">Galeri</p>
      <Slider {...settings}>
        {/* CARD */}
        <div className="p-1">
          <div className="border-2 border-primary rounded-xl p-2 md:w-[300px] xl:w-[350px] ">
            <img 
              src="/galeri/image 5.png" 
              alt=""
              className="w-full" />
          </div>
        </div>
        {/* CARD */}
        <div className="p-1">
          <div className="border-2 border-primary rounded-xl p-2 md:w-[300px] xl:w-[350px] ">
            <img 
              src="/galeri/image 6.png" 
              alt=""
              className="w-full" />
          </div>
        </div>
        {/* CARD */}
        <div className="p-1">
          <div className="border-2 border-primary rounded-xl p-2 md:w-[300px] xl:w-[350px] ">
            <img 
              src="/galeri/image 7.png" 
              alt=""
              className="w-full" />
          </div>
        </div>
        
      </Slider>
    </section>
  )
}

export default Galeri