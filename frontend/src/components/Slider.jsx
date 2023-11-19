// Slider.js

import React, { useState, useEffect } from 'react';
import './Slider.css';

const imageUrls = [
  'https://images.unsplash.com/photo-1699459867086-9d9d4031c0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1695653420018-6fcd7709a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1698046365908-661e92b51332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
];
const constantHeaderText = 'Looking for Affordable Cleaning Assistance?';
const constantParagraphText = 'Look no further! Spotless Guru Cleaners offers convenient and affordable services, ensuring fresh and clean spaces without a hassle';
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
          style={{ backgroundImage: `url(${imageUrl})`, height: '400px' }}
        >
          <div className="text-white absolute top-0 left-0 p-4 md:w-1/3">
            <h1 className="text-2xl md:text-3xl font-bold  overflow-hidden">{constantHeaderText}</h1>
            <p className="text-base md:text-lg mt-4 md:mt-8 overflow-hidden">{constantParagraphText}</p>
            <h2 className="text-sm mt-2 md:mt-4">{heading}</h2>
            <button className="bg-blue hover:bg-blue-700 mt-6 md:mt-10 text-white font-bold py-2 px-4 rounded-full">
              {constantButtonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
