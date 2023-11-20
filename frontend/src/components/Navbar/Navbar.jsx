import React, { useState } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Spotless guru black.svg'

const Navbar = () => {
  return (
    <div>
    <div className="bg-customBlue text-right text-white font-signature h-10vh pr-4 md:text-right md:h-auto">
         <a href="tel:0796286466" className="inline-block">Call: 0796286466</a>
     </div>

     
     <div className="container mx-auto flex justify-between items-center">
       <Link to="/" className="text-customBlue text-lg font-signature font-bold">
         <img src={logo} alt="Logo" className="h-16" />
         
       </Link>

       <ul className="flex space-x-9  mx-auto">
         <li>
           <Link to="/" className="text-customBlue hover:underline text-lg font-signature font-bold">Home</Link>
         </li>
         <li>
           <Link to="/about" className="text-customBlue hover:underline text-lg font-signature font-bold">About Us</Link>
         </li>
         <li>
           <Link to="/services" className="text-customBlue hover:underline text-lg font-signature font-bold">Services</Link>
         </li>
         <li>
         <Link to="/services" className="text-customBlue hover:underline text-lg font-signature font-bold">Testimonials</Link>
       </li>
         <li>
           <Link to="/contact" className="text-customBlue hover:underline text-lg font-signature font-bold">Contact Us</Link>
         </li>
       </ul>
     </div>
   
     </div>

  );
};

export default Navbar;