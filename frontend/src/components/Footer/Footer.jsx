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

     <div className="border-t-2 border-white absolute left-1/2 transform -translate-x-1/2 w-3/4"></div>
    <SocialIcons Icons={Icons} />
    <span>Spotless Guru Cleaners</span>
    <div className="mt-4">Copyright &copy; {new Date().getFullYear()} Spotless Guru Cleaners</div>
  
    </footer>
    
    </>
   
  )
}

export default Footer
