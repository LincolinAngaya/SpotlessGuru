import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Spotless guru black.svg'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  return (
    <div>
    <div className="bg-customBlue text-right text-white font-signature h-10vh pr-4 md:text-right md:h-auto">
      <a href="tel:0796286466" className="inline-block">Call: 0796286466</a>
    </div>

    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-customBlue text-lg font-signature font-bold">
        <img src={logo} alt="Logo" className="h-16" />
      </Link>

      <ul className="flex space-x-9 mx-auto">
        <li>
          <Link to="/" className="text-customBlue hover:underline text-lg font-signature font-bold">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-customBlue hover:underline text-lg font-signature font-bold">About Us</Link>
        </li>
        <li>
          {/* Services link with dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-customBlue hover:underline text-lg font-signature font-bold focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 bg-white rounded shadow-md">
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
                    <Link to="/services/clothes-hand-washing" className="block px-4 py-2 text-customBlue hover:bg-gray-200">
                      Clothes Hand Washing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
        <li>
          <Link to="/testimonials" className="text-customBlue hover:underline text-lg font-signature font-bold">Testimonials</Link>
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