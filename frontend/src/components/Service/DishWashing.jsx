import React from 'react'
import Footer from '../Footer/Footer'

function DishWashing() {
  return (
    <div>
    <div>
        <h2 className='bg-gradient-to-b from-customBlue to-sky text-white p-6 text-center font-signature text-3xl'>Dish Washing</h2>
    </div>

      <div>
            <h1>Are your dishes piling up?</h1>
            <p>Spotless Guru dish washing services guarantee sparkling clean results. Relax while we handle the dirty work—affordable, efficient, and with just a coin, your dishes gleam!</p>
      </div>

      <div>
      <h1>Dish Washing Checklist</h1>
      
      <div>
    
      <img src='' alt='dish washing' />
      <ul>
        <li>Personal Plates and Bowls</li>
        <li>Forks, knives, spoons, Cooking Spatulas & tongs</li>
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
