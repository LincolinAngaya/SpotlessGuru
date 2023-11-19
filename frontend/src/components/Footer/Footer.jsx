import React from "react";
import ItemsContainer from "./ItemsContainer";
// import BookingSteps from "./BookingSteps";
import SocialIcons from "./SocialIcons";
import { Icons } from "../menu";
import Slider from "../Hero/Slider";

function Footer() {
  return (
    // <>
      // <BookingSteps />
      <footer className="bg-navy text-white text-center relative">
        <div className="container mx-auto">
          {/* Add padding to the container for better responsiveness */}
          
            <ItemsContainer />
         
          <div className="w-3/4 mx-auto border-t border-white opacity-50 mt-[-1.5rem]"></div>
          <div className="py-8">
            <SocialIcons Icons={Icons} />
          </div>
        </div>
        <span className="block text-lg">Spotless Guru Cleaners</span>
        <div className="mt-4 bg-navy text-white text-center p-4">
          Copyright &copy; {new Date().getFullYear()} Spotless Guru Cleaners
        </div>
      </footer>
    // </>
  );
}

export default Footer;
