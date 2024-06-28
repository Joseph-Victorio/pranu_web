import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




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
  return (
    <section className='font-rhodium p-5 sm:p-[75px]'>
        <h2 className='text-primary text-[24px] sm:text-[40px] text-center mb-5'>
            Apa Kata Mereka?
        </h2>
    
      <Slider {...settings} >
        {/* cards */}
        <div className="p-1">
          <div className=" h-[300px] border-2 border-primary rounded-[30px] p-5 ">
            {/* PROFILE */}
            <div className="text-center">
              <img 
                src="/ligthing.png" 
                alt=""
                className="rounded-full w-[80px] mx-auto" />
                {/* NAMA */}
                <p className="sm:text-[30px] text-primary">Syifa Zahwa</p>
            </div>
            <p className="text-justify text-[12px] mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque totam aliquid qui maiores consectetur odit architecto veritatis ipsa numquam.</p>
          </div>
        </div>
        {/* cards */}
        <div className="p-1">
          <div className=" h-[300px] border-2 border-primary rounded-[30px] p-5 ">
            {/* PROFILE */}
            <div className="text-center">
              <img 
                src="/ligthing.png" 
                alt=""
                className="rounded-full w-[80px] mx-auto" />
                {/* NAMA */}
                <p className="sm:text-[30px] text-primary">Syifa Zahwa</p>
            </div>
            <p className="text-justify text-[12px] mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque totam aliquid qui maiores consectetur odit architecto veritatis ipsa numquam.</p>
          </div>
        </div>
        {/* cards */}
        <div className="p-1">
          <div className=" h-[300px] border-2 border-primary rounded-[30px] p-5 ">
            {/* PROFILE */}
            <div className="text-center">
              <img 
                src="/ligthing.png" 
                alt=""
                className="rounded-full w-[80px] mx-auto" />
                {/* NAMA */}
                <p className="sm:text-[30px] text-primary">Syifa Zahwa</p>
            </div>
            <p className="text-justify text-[12px] mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque totam aliquid qui maiores consectetur odit architecto veritatis ipsa numquam.</p>
          </div>
        </div>
        
       
        
        
      </Slider>

        
    </section>
  )
}

export default ApaKataMereka