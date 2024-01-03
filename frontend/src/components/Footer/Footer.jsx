import React from "react";
import ItemsContainer from "./ItemsContainer";
 import BookingSteps from "./BookingSteps";
import SocialIcons from "./SocialIcons";
import { Icons } from "../menu";
// import Slider from "../Hero/Slider";

function Footer() {
  return (
    <>
   
      <footer className="bg-navy text-white ">
     
        <div className="container mx-auto">
          {/* Add padding to the container for better responsiveness */}
          
          <div className="lg:flex lg:items-center">
          <ItemsContainer />
        </div>
         
          <div className="w-4/4 mx-auto border-t border-white opacity-50 mt-[-1.5rem]"></div>
          <div className=" text-center">
          <div className="py-2">
            <SocialIcons Icons={Icons} />
          </div>
        <div className=" bg-navy text-white text-center ">
          Copyright &copy; {new Date().getFullYear()} Spotless Guru Cleaners
        </div>
        </div>
        </div>
      </footer>
     </>
  );
}

export default Footer;
