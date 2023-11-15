import React from 'react'
import ItemsContainer from './ItemsContainer'
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <h1>So How Does It Work</h1>
            <p>Just follow this simple steps</p>
        </div>
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
 
 <div>
 
 <span>Spotless Guru Cleaners </span>
 <span> Copyright &copy; {new Date().getFullYear()} Spotless Guru Cleaners</span>

 
 
 </div>
  </footer>
  )
}

export default Footer
