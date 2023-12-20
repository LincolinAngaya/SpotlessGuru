import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Spotless guru black.svg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Add state for services dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false); // Close services dropdown when closing the menu
  };
  return (
    <div>
       { /*<div className="bg-customBlue text-right text-white font-signature h-10vh pr-4 md:text-right md:h-auto">
          <a href="tel:0796286466" className="inline-block">
            Call: 0796286466
          </a>
  </div>*/}

<header className={`bg-white ${isMenuOpen ? 'md:min-h-fit min-h-[40vh]' : ''}`}>
        <nav className="nav flex justify-between items-center">
          <div className="ml-4 p-3">
            <Link to="/" className="text-customBlue text-lg font-signature font-bold">
              <img src={logo} alt="Logo" className="w-16 cursor-pointer" />
            </Link>
          </div>
           
           

          <div
            className={`nav-links duration-500 md:static absolute ${
              isMenuOpen ? 'bg-white top-[9%]' : 'md:min-h-fit min-h-[60vh] -top-full'
            } md:w-auto w-full flex flex-col items-center md:flex-row md:gap-[4vw] gap-8 px-2`}
          >
            <ul className="flex flex-col items-center md:flex-row md:items-center w-full">
              <li className="relative">
                <Link
                  onClick={closeMenu}
                  to="/"
                  className={`text-lg font-signature font-bold ${
                    isMenuOpen ? 'text-customBlue' : 'text-customBlue hover:text-sky'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="ml-0 md:ml-7 p-3">
                <Link
                  onClick={closeMenu}
                  to="/about"
                  className={`text-lg font-signature font-bold ${
                    isMenuOpen ? 'text-customBlue' : 'text-customBlue hover:text-sky'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="ml-0 md:ml-7 p-3 relative">
  <div
    onClick={toggleServicesDropdown}
    className={`flex items-center text-lg font-signature font-bold cursor-pointer ${
      isMenuOpen ? 'text-customBlue' : 'text-customBlue hover:text-sky'
    }`}
  >
    <span>Services</span>
    <ion-icon
      name={isServicesDropdownOpen ? 'caret-up' : 'caret-down'}
      className="ml-2 text-customBlue text-lg"
      style={{ fontSize: '24px', fontWeight: 'bold' }}
    ></ion-icon>
  </div>
  {/* Display the dropdown items when isServicesDropdownOpen is true */}
  {isServicesDropdownOpen && (
    <div className="absolute left-0 mt-2 bg-navy shadow-md border border-gray-200 md:w-64 z-10">
      <Link
        onClick={closeMenu}
        to="services/housecleaning"
        className="block px-4 py-2 text-lg text-bold text-white hover:text-customBlue hover:bg-sky"
      >
        Housecleaning
      </Link>
      <Link
        onClick={closeMenu}
        to="services/dishwashing"
        className="block px-4 py-2 text-lg text-bold text-white hover:text-customBlue hover:bg-sky"
      >
        Dishwashing
      </Link>
      <Link
        onClick={closeMenu}
        to="/services/handwashing"
        className="block px-4 py-2 text-lg text-bold text-white hover:text-customBlue hover:bg-sky"
      >
        Clothes handwashing
      </Link>
    </div>
  )}
</li>




              <li className="ml-0 md:ml-7 p-2">
                <Link
                  onClick={closeMenu}
                  to="/testimonials"
                  className={`text-lg font-signature font-bold ${
                    isMenuOpen ? 'text-customBlue' : 'text-customBlue hover:text-sky'
                  }`}
                >
                  Testimonials
                </Link>
              </li>
              <li className="ml-0 md:ml-7 p-2"> {/* Adjusted the padding here */}
                <Link
                  onClick={closeMenu}
                  to="/contact"
                  className={`text-lg font-signature font-bold ${
                    isMenuOpen ? 'text-customBlue' : 'text-customBlue hover:text-sky'
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center gap-6">
            <ion-icon
              onClick={toggleMenu}
              name={isMenuOpen ? 'close' : 'menu'}
              className="text-3xl cursor-pointer"
            ></ion-icon>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;