// HeroSection.js

import React from 'react';
import Houseclean from '../assets/Houseclean.jpg';
import siginin from '../assets/siginin.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section relative h-screen flex items-center justify-center">
      <img
        src={siginin}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="z-10 text-white absolute top-1/2 ml-8 transform -translate-y-1/2">
        <div>
        <h1 className="font-signature font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
  Looking for Affordable Cleaning Assistance?
</h1>

<p className="max-w-screen-md mx-auto leading-normal mt-6 text-xl">
          Elevate your living standards with Spotless Guru Cleaners. Our expert team offers meticulous house cleaning, efficient dishwashing, and delicate hand clothes washing, creating sanctuaries of freshness. From sparkling surfaces to spotless dishes and impeccably laundered clothes, experience a holistic cleaning approach. Step into a world where cleanliness meets excellence 
           your space deserves the best!
</p>
          <h2 className="text-sky mt-4 font-bold text-xl font-poppins">
            Explore our services today!
          </h2>
          <Link to='/booking'>
            <button className="bg-navy hover:bg-sky hover:text-customBlue mt-8 py-2 px-4 rounded-md">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
