import React from 'react'
import Footer from '../Footer/Footer'

function HouseCleaning() {
  return (
    <div>
    <div>
    <h2 className='bg-gradient-to-b from-customBlue to-sky text-white p-6 text-center font-signature text-3xl'>House Cleaning</h2>
  </div>

      <div>
      <h1>Is your home in need of a little extra attention?</h1>
      <p>Spotless Guru house cleaning services are guaranteed to get your home gleaming clean! The best part is that you get to sit back and relax while we do the dirty work!</p>
      </div>

      <div>
      <h1>Our House Cleaning Includes</h1>
      <div>
      <div>
      <h2>Kitchen Cleaning</h2>
      <img src='' alt='kitchen cleaning' />
      <ul>
            <li>Dust and spot clean cabinet exteriors</li>
            <li>Clean microwave, induction, and fridge (inside & out)</li>
            <li>Wipe small appliances and items on countertops</li>
            <li>Sanitize sink and polish faucet</li>
            <li>Clean/polish all appliance exteriors</li>
            <li>Dust light fixtures (using a 2-step stool)</li>
            <li>Remove trash and replace the bag</li>
            <li>Vacuum and mop kitchen floor</li>
    </ul>
    <button type="button">Book Now</button>

      </div>
      <div>
      <h2>Bathroom Cleaning</h2>
      <img src='' alt='Bathroom Cleaning' />
      <ul>
        <li>Shower scrubbed</li>
        <li>Clean shower door</li>
        <li>Disinfect toilet and toilet area</li>
        <li>Mirrors cleaned (streak-free)</li>
        <li>Sink cleaned and faucet polished</li>
        <li>Vacuum bathroom rugs or shake</li>
        <li>Clean and disinfect bathroom floors</li>
    </ul>
    <button type="button">Book Now</button>


      </div>

      <div>
      <h2>All Rooms</h2>
      <img src='' alt='All Rooms' />
      <ul>
            <li>Dust all wall art, TVs, electronics etc.</li>
            <li>Dust all furniture</li>
            <li>Vacuum all floors & mop hard surface floors</li>
            <li>Remove cobwebs</li>
            <li>Dust ceiling fans</li>
            <li>Dust light fixtures and wall art</li>
            <li>Wash light switches and doorknobs</li>
            <li>Dust and spot clean doors and door frames</li>
      </ul>
      <button type="button">Book Now</button>

      </div>
        
      </div>
      
      </div>
      <Footer />

    </div>
  )
}

export default HouseCleaning
