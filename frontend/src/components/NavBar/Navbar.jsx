import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/guru.png';
import '../NavBar/styles.css';

export default function Navbar() {
  return (
    <>
      <div className="nav_1"> {/* Call: 0796286466 */}</div>

      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" width="100" height="25" />
        </div>
        <ul>
          <li className="active">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
