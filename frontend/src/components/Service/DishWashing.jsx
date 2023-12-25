import React from 'react'
import { Link } from 'react-router-dom'; 
import Footer from '../Footer/Footer'
import dishwashing from '../assets/dish1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function DishWashing() {
  return (
    <div>
    <div>
    <div className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-4'>
    Dish Washing
  </div>
  
  

  <div className='mx-10 mt-5'>
  <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>
    Are your dishes piling up?
  </h1>

  <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>
    Spotless Guru dish washing services guarantee sparkling clean results. Relax while we handle the dirty work—affordable, efficient, and with just a coin, your dishes gleam!
  </p>
</div>


    
     
      
<div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
    
      <img src={dishwashing}  className='rounded-r-lg' height="400" width="500" alt='dish washing' />
      <div>
      <h1 className='p-3 font-bold font-signature text-2xl sm:text-2xl md:text-2xl lg:text-4xl text-customBlue'>
      Dish Washing Checklist
    </h1>
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
     <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>
      Personal Plates and Bowls</li> 
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Forks, sieve, knives, spoons, Cooking Spatulas & tongs</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Mugs and Glasses</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Small pots, Frying Pans, sufurias, and Cutting Boards</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Food Storage Containers</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Items like blender jars or toaster trays</li>
       </ul>
    
       <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
       Book Now
     </Link>
    
         </div>
      </div>
      </div>
      <Footer />

    </div>
  )
}

export default DishWashing
