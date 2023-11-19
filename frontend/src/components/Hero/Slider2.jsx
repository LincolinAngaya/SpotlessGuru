// Slider.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './Slider.css';
import Houseclean from '../assets/Houseclean.jpg'
import Dishwash from '../assets/Dishwash.jpg'
import Slider from "react-slick";


const imageUrls = [Houseclean, Dishwash];
// const constantHeaderText = 'Looking for Affordable Cleaning Assistance?';
// const constantParagraphText = 'Look no further! Spotless Guru Cleaners offers convenient and affordable services, ensuring fresh and clean spaces without a hassle';
// const heading = 'Explore our services today!'
// const constantButtonText = 'Sign In';

const Slider2 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    slidesToScroll: 1
  };
  

  return (
    
    <>
    <Slider {...settings} >
    {imageUrls.map((imageUrl, i) => (
     <div key={i}> <div
        
        className='md:flex  w-full relative' 
        // style={{ backgroundImage: `url(${imageUrl})`, height: '600px' }}
      >
        <div className="text-white z-50  p-4  mt-10 ml-10">
          <h1 className=" text-6xl font-signature font-bold ">Looking for Affordable<br/> Cleaning Assistance?</h1>
          <p className="font-signature text-4xl text-white text-md:text-lg mt-4 md:mt-8">Look no further!<br/> Spotless Guru Cleaners offers<br/>  convenient and affordable services,<br/> ensuring fresh and clean spaces<br/> without a hassle</p>
          <h2 className=" mt-2 md:mt-4  text-3xl text-sky font-signature font-bold ">Explore our services today!</h2>
          
         <button className="bg-navy hover:bg-sky hover:text-customBlue text-3xl mt-6 md:mt-10 text-white font-bold py-3 px-6 rounded-md">
  Sign In
</button>
       
        </div>
        <img src={imageUrl} className='object-cover object-center absolute top-0 left-0 w-full h-full' />
      </div>

      </div>
    ))}
    </Slider>
   
    </>
  );
};

export default Slider2;
