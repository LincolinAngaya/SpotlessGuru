import React from 'react'
import Footer from '../Footer/Footer'
import dishwashing from '../assets/dish1.jpg'
import { GoChecklist } from "react-icons/go";

function DishWashing() {
  return (
    <div>
    <div>
    <div className='bg-gradient-to-b from-customBlue to-sky text-white font-bold p-6 text-center font-signature text-2xl sm:text-2xl md:text-2xl'>
    Dish Washing
  </div>
  <div className='p-3'>
  <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>
    Are your dishes piling up?
  </h1>

  <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>
    Spotless Guru dish washing services guarantee sparkling clean results. Relax while we handle the dirty work—affordable, efficient, and with just a coin, your dishes gleam!
  </p>
</div>


    
     
      
      <div className='flex flex-col lg:flex-row mx-10 space-x-4 lg:space-x-8'>
    
      <img src={dishwashing} height="400" width="500" alt='dish washing' />
      <div>
      <h1 className='p-3 font-bold font-signature text-4xl text-customBlue'>Dish Washing Checklist</h1>
      <ul>
      <li><GoChecklist />Personal Plates and Bowls</li>
      <li><GoChecklist />Forks,sieve, knives, spoons, Cooking Spatulas & tongs</li>
      <li><GoChecklist />Mugs and Glasses</li>
      <li><GoChecklist />Small pots, Frying Pans, sufurias, and Cutting Boards</li>
      <li><GoChecklist />Food Storage Containers</li>
      <li><GoChecklist />Items like blender jars or toaster trays</li>
       </ul>
    
         <button  className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer'type="button">Book Now</button>
    
         </div>
      </div>
      </div>
      <Footer />

    </div>
  )
}

export default DishWashing
