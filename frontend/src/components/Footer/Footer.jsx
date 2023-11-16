import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "../menu";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <h1>So How Does It Work</h1>
            <p>Just follow this simple steps</p>
        </div>
        <div className="bg-custom-navy">
        <div>
            <div>
             <h1>You Order</h1>
             <p>Create your account or log in and place order</p>
            </div>

            <div>
            <h1>We Come</h1>
            <p>we send clreaner based on your location and service</p>
           </div>

           <div>
           <h1>We Clean</h1>
           <p>We proffessionally clean you space based on your preference</p>
          </div>
           
          <div>
           <h1>You Smile</h1>
           <p>we make you smile with Satisfaction</p>
          </div>
         
        </div>

        <ItemsContainer />
 
        <div className="mx-auto p-8 mt-16 bg-custom-navy text-white text-center relative">
        <div className="border-t border-gray-400 absolute left-1/2 transform -translate-x-1/2 w-4/5"></div>
        <SocialIcons Icons={Icons} />
        <span>Spotless Guru Cleaners</span>
        <div className="mt-4">Copyright &copy; {new Date().getFullYear()} Spotless Guru Cleaners</div>
      </div>
      </div>
  </footer>
  )
}

export default Footer
