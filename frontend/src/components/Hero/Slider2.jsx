import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './Slider.css';
import Houseclean from '../assets/Houseclean.jpg';
import Dishwash from '../assets/Dishwash.jpg';
import Slider from "react-slick";

const imageUrls = [Houseclean, Dishwash];

const Slider2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {imageUrls.map((imageUrl, i) => (
          <div key={i} className="relative">
            <img src={imageUrl} className='object-cover object-center w-full h-full' alt={`slide-${i}`} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50 p-4 w-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-signature font-bold leading-tight md:leading-tight lg:leading-tight sm:text-5xl sm:leading-snug">
                Looking for Affordable<br /> Cleaning Assistance?
              </h1>
              <p className="font-signature text-base md:text-xl lg:text-2xl text-white mt-4 sm:mt-6 lg:mt-8">
                Look no further! Spotless Guru Cleaners offers convenient and affordable services, ensuring fresh and clean spaces without a hassle
              </p>
              <h2 className="mt-2 sm:mt-4 text-sm md:text-base lg:text-lg text-sky font-signature font-bold">
                Explore our services today!
              </h2>
              <button className="bg-navy hover:bg-sky hover:text-customBlue text-sm sm:text-md md:text-lg lg:text-xl mt-2 sm:mt-4 lg:mt-6 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-md">
                Sign In
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Slider2;
