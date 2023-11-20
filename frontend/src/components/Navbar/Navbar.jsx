import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="bg-slate-400 relative">
        <div className="nav flex justify-around">
          <div className="logo ml-7 p-3">
            <p className="text-4xl font-bold font-signature">Phinic</p>
          </div>
          <div className={`max-[1300px]:hidden`}>
            <ul className="flex list-none no-underline gap-5">
              <li className="ml-7 p-3">
                <Link to="/" className="text-white" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/about" className="text-white" onClick={closeMenu}>
                  About Me
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/projects" className="text-white" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/experience" className="text-white" onClick={closeMenu}>
                  Experience
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/contact" className="text-white" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div onClick={toggleMenu} className="pr-4 z-10 cursor-pointer md:hidden">
            {open ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {open && (
          <ul className="flex flex-col justify-center items-center absolute top-0 right-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
            <li className="ml-7 p-3">
              <Link to="/" className="text-white" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/about" className="text-white" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/projects" className="text-white" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/experience" className="text-white" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/contact" className="text-white" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;