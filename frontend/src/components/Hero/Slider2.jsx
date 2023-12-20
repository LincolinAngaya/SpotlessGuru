import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'; 
import React from 'react';
import './Slider.css';
import Houseclean from '../assets/Houseclean.jpg';
import Slider from "react-slick";

const imageUrls = [Houseclean];

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
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-center sm:text-left lg:top-1/3">
              <h1 className="font-signature font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                Looking for Affordable Cleaning Assistance?
              </h1>
              <p className="font-signature text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-4 sm:mt-6 lg:mt-8 sm:whitespace-pre-line md:whitespace-normal">
                Look no further! <br /> Spotless Guru Cleaners offers convenient and affordable services, ensuring fresh and clean spaces without a hassle
              </p>
              <h2 className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-sky font-signature font-bold">
                Explore our services today!
              </h2>
              <Link to='booking' className="bg-navy hover:bg-sky hover:text-customBlue text-sm sm:text-md md:text-lg lg:text-xl mt-2 sm:mt-4 lg:mt-6 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-md">
                Book Now
              </Link>
              
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Slider2;
