import React from 'react'
import { Link } from 'react-router-dom'; 
import Footer from '../Footer/Footer'
import kitchen from '../assets/kitchen.jfif'
import bathroom from '../assets/toilet.jpg'
import room from '../assets/room.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function HouseCleaning() {
  return (
    <div>
    <div className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>
   House Cleaning
  </div>

  <div className='mx-10 mt-5'>
  <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>Is your home in need of extra attention?</h1>
  <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>Spotless Guru house cleaning services are guaranteed to get your home gleaming clean! The best part is that you get to sit back and relax while we do the dirty work!</p>
   
  <h1 className='font-bold font-signature mt-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue'>
  Our House Cleaning Includes
</h1>
    </div>   
    <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-9 py-8'>
      
    <img src={kitchen}  className='rounded-r-lg' height="400" width="500" alt='dish washing' />
      <div>
      <h1 className='font-bold font-signature text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mt-3 text-customBlue'>Kitchen Cleaning</h1>
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust and spot clean cabinet exteriors</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Clean microwave, induction, and fridge (inside & out)</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Wipe small appliances and items on countertops</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Sanitize sink and polish faucet</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Clean/polish all appliance exteriors</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust light fixtures (using a 2-step stool)</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Remove trash and replace the bag</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Vacuum and mop kitchen floor</li>
      </ul>
      <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
       Book Now
     </Link>
      </div>
      </div>

     <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
      <div>
      <h1 className='font-bold font-signature text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl  text-customBlue'>Bathroom Cleaning</h1>
      
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Shower scrubbed</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Clean shower door</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Disinfect toilet and toilet area</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Mirrors cleaned (streak-free)</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Sink cleaned and faucet polished</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Vacuum bathroom rugs or shake</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Clean and disinfect bathroom floors</li>
    </ul>
    <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
       Book Now
     </Link>
    

    </div>
    <img src={bathroom}  className='rounded-l-lg' height="400" width="500" alt='hand washing' />
</div>


<div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
     
<img src={room}  className='rounded-r-lg' height="400" width="500" alt='dish washing' />
      <div>
      <h1 className='font-bold font-signature text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mt-3 text-customBlue'>All Rooms</h1>
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Electronics Dusting and Cleaning etc.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust all furniture</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Vacuum all floors & mop hard surface floors</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Surface Wiping and Disinfecting</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Window Cleaning</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust light fixtures and wall art</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Wash light switches and doorknobs</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Odor Elimination</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust and spot clean doors and door frames</li>
      </ul>
      <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
      Book Now
    </Link>
         </div>
      </div>
     
      <Footer />

    </div>
  )
}

export default HouseCleaning
