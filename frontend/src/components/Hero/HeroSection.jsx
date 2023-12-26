// HeroSection.js

import React from 'react';
import Houseclean from '../assets/Houseclean.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section relative h-screen flex items-center justify-center">
      <img
        src={Houseclean}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-signature font-bold text-2xl">
          Looking for Affordable Cleaning Assistance?
        </h1>
        <p className="font-signature ">
          Look no further! <br /> Spotless Guru Cleaners offers convenient and
          affordable services, ensuring fresh <br/>and clean spaces without a hassle
        </p>
        <h2 className="text-white mt-4 text-bold text-base">Explore our services today!</h2>
        <Link to='/booking'>
        <button className="bg-navy hover:bg-sky hover:text-customBlue mt-8 py-2 px-4 rounded-md">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
