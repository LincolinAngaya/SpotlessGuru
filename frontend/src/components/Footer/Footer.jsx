import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "../menu";

function Footer() {
  return (
    
    <footer className="text-white">
        
        <div className="bg-custom-navy text-white">
               <ItemsContainer />
 
        <div className="bg-custom-navy text-white text-center relative">
         <div className="border-t-2 border-white absolute left-1/2 transform -translate-x-1/2 w-3/4"></div>
        <SocialIcons Icons={Icons} />
        <span>Spotless Guru Cleaners</span>
        <div className="mt-4">Copyright &copy; {new Date().getFullYear()} Spotless Guru Cleaners</div>
      </div>
      </div>
  </footer>
  )
}

export default Footer
