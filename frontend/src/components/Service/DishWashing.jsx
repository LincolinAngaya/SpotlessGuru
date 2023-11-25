import React from 'react'
import Footer from '../Footer/Footer'
import dishwashing from '../assets/Dish wash 4.jfif'

function DishWashing() {
  return (
    <div>
    <div className='bg-gradient-to-b from-customBlue to-sky text-white font-bold p-6 text-center font-signature text-2xl sm:text-2xl md:text-2xl'>
    Dish Washing
  </div>
      <div>
            <h1 className='p-3 text-3x1'>Are your dishes piling up?</h1>
            <p>Spotless Guru dish washing services guarantee sparkling clean results. Relax while we handle the dirty work—affordable, efficient, and with just a coin, your dishes gleam!</p>
      </div>

    
     
      
      <div className='p-2 flex flex-col lg:flex-row'>
    
      <img src={dishwashing} height="300" width="400" alt='dish washing' />
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
      
      <Footer />

    </div>
  )
}

export default DishWashing
