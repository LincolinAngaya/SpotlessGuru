import React from "react";
import ItemsContainer from "./ItemsContainer";
import BookingSteps from "./BookingSteps";
import SocialIcons from "./SocialIcons";
import { Icons } from "../menu";


function Footer() {
  return (
    <>
       <BookingSteps />
       <footer className="bg-navy text-white text-center relative">
         <ItemsContainer />
         <div className="w-3/4 mx-auto border-t border-white opacity-50 mt-[-5.5rem]"></div>
<div>
    <SocialIcons Icons={Icons} />
</div>

    
    <span>Spotless Guru Cleaners</span>
    <div className="mt-4  bg-navy text-white text-center p-4">
    Copyright &copy; {new Date().getFullYear()} Spotless Guru Cleaners
  </div>
  
  
    </footer>
    
    </>
   
  )
}

export default Footer
