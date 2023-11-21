import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Spotless guru black.svg';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="bg-customBlue text-right text-white font-signature h-10vh pr-4 md:text-right md:h-auto">
        <a href="tel:0796286466" className="inline-block">
          Call: 0796286466
        </a>
      </div>

      <div className="container mx-auto flex justify-around">
        <Link to="/" className="text-customBlue text-lg font-signature font-bold">
          <img src={logo} alt="Logo" className="h-16" />
        </Link>

        {/* Responsive Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Regular Navigation */}
        <ul className="md:flex gap-5 md:w-2/3">
          <li className='ml-7 p-3'>
            <Link to="/" className="text-customBlue hover:bg-sky text-lg font-signature font-bold">
              Home
            </Link>
          </li>
          <li className='ml-7 p-3'>
            <Link to="/about" className="text-customBlue hover:bg-sky text-lg font-signature font-bold">
              About Us
            </Link>
          </li>
          <li className="md:relative ml-7 p-3">
            {/* Services link with dropdown */}
            <button
              onClick={toggleDropdown}
              className="text-customBlue hover:bg-sky text-lg font-signature font-bold focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-md md:hidden">
                <ul>
                  <li>
                    <Link to="/services/adish-washing" className="block px-4 py-2 text-customBlue hover:bg-gray-200">
                      Adish Washing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/housecleaning" className="block px-4 py-2 text-customBlue hover:bg-gray-200">
                      Housecleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/clothes-hand-washing"
                      className="block px-4 py-2 text-customBlue hover:bg-gray-200"
                    >
                      Clothes Hand Washing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className='ml-7 p-3'>
            <Link to="/testimonials" className="text-customBlue hover:bg-sky text-lg font-signature font-bold">
              Testimonials
            </Link>
          </li>
          <li className='ml-7 p-3'>
            <Link to="/contact" className="text-customBlue hover:bg-sky text-lg font-signature font-bold">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
