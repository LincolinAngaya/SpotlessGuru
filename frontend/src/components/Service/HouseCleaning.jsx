import React from 'react'
import Footer from '../Footer/Footer'
import kitchen from '../assets/kitchen.jfif'
import bathroom from '../assets/toilet.jpg'
import room from '../assets/room.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function HouseCleaning() {
  return (
    <div>
    <div className='bg-gradient-to-b from-customBlue to-sky text-white font-bold p-6 text-center font-signature text-2xl sm:text-2xl md:text-2xl'>
   House Cleaning
  </div>

  <div className='mx-10 mt-5'>
  <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>Is your home in need of extra attention?</h1>
  <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>Spotless Guru house cleaning services are guaranteed to get your home gleaming clean! The best part is that you get to sit back and relax while we do the dirty work!</p>
   
  <h1 className='font-bold font-signature text-4xl text-customBlue'>Our House Cleaning Includes</h1>
    </div>   
    <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
      
    <img src={kitchen}  className='rounded-r-lg' height="400" width="500" alt='dish washing' />
      <div>
      <h1 className='p-3 font-bold font-signature text-4xl text-customBlue'>Kitchen Cleaning</h1>
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
      <button  className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer'type="button">Book Now</button>
      </div>
      </div>

     <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
      <div>
      <h1 className='p-3 font-bold font-signature text-4xl text-customBlue'>Bathroom Cleaning</h1>
      
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Shower scrubbed</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Clean shower door</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Disinfect toilet and toilet area</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Mirrors cleaned (streak-free)</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Sink cleaned and faucet polished</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Vacuum bathroom rugs or shake</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Clean and disinfect bathroom floors</li>
    </ul>
    <button  className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer'type="button">Book Now</button>
    

    </div>
    <img src={bathroom}  className='rounded-l-lg' height="400" width="500" alt='hand washing' />
</div>


<div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
     
<img src={room}  className='rounded-r-lg' height="400" width="500" alt='dish washing' />
      <div>
      <h1 className='p-3 font-bold font-signature text-4xl text-customBlue'>All Rooms</h1>
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust all wall art, TVs, electronics etc.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust all furniture</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Vacuum all floors & mop hard surface floors</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Remove cobwebs</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust ceiling fans</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust light fixtures and wall art</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Wash light switches and doorknobs</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust and spot clean doors and door frames</li>
      </ul>
      <button  className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer'type="button">Book Now</button>
    
         </div>
      </div>
     
      <Footer />

    </div>
  )
}

export default HouseCleaning
