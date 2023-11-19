// Slider.js

import React, { useState, useEffect } from 'react';
import './Slider.css';
import Houseclean from './assets/Houseclean.jpg'
import Dishwash from './assets/Dishwash.jpg'


const imageUrls = [Houseclean, Dishwash];
// const constantHeaderText = 'Looking for Affordable Cleaning Assistance?';
// const constantParagraphText = 'Look no further! Spotless Guru Cleaners offers convenient and affordable services, ensuring fresh and clean spaces without a hassle';
const heading = 'Explore our services today!'
const constantButtonText = 'Sign in';

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {imageUrls.map((imageUrl, i) => (
        <div
          key={i}
          className={`slide ${i === index ? 'active' : ''} md:flex`}
          style={{ backgroundImage: `url(${imageUrl})`, height: '600px' }}
        >
          <div className="text-white absolute top-0 left-0 p-4 md:w-1/3 mt-10 ml-10">
            <h1 className="text-2xl md:text-3xl font-bold  overflow-hidden">Looking for Affordable<br/> Cleaning Assistance?</h1>
            <p className="text-base md:text-lg mt-4 md:mt-8 overflow-hidden">Look no further!<br/> Spotless Guru Cleaners offers<br/>  convenient and affordable services,<br/> ensuring fresh and clean spaces<br/> without a hassle</p>
            <h2 className="text-sm mt-2 md:mt-4 font-bold">{heading}</h2>
            <button className="bg-navy hover:bg-sky mt-6 md:mt-10 text-white font-bold py-2 px-4 rounded-full">
              {constantButtonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
