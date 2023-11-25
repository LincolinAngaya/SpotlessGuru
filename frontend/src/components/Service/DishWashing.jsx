import React from 'react'
import Footer from '../Footer/Footer'
import dishwashing from '../assets/dish1.jpg'

function DishWashing() {
  return (
    <div>
    <div>
    <div className='bg-gradient-to-b from-customBlue to-sky text-white font-bold p-6 text-center font-signature text-2xl sm:text-2xl md:text-2xl'>
    Dish Washing
  </div>
      <div>
            <h1 className='p-3 text-3x1'>Are your dishes piling up?</h1>
            <p className='p-3 mt-3 text-left text-customBlue font-poppins lg:font-sans text-lg lg:text-xl'>Spotless Guru dish washing services guarantee sparkling clean results. Relax while we handle the dirty work—affordable, efficient, and with just a coin, your dishes gleam!</p>
      </div>

    
     
      
      <div className='flex flex-col lg:flex-row mx-10 space-x-4 lg:space-x-8'>
    
      <img src={dishwashing} height="400" width="500" alt='dish washing' />
      <div>
      <h1>Dish Washing Checklist</h1>
      <ul>
        <li>Personal Plates and Bowls</li>
        <li>Forks,sieve, knives, spoons, Cooking Spatulas & tongs</li>
        <li>Mugs and Glasses</li>
        <li>Small pots, Frying Pans, sufurias, and Cutting Boards</li>
        <li>Food Storage Containers</li>
        <li>Items like blender jars or toaster trays</li>
       </ul>
    
         <button type="button">Book Now</button>
    
         </div>
      </div>
      </div>
      <Footer />

    </div>
  )
}

export default DishWashing
