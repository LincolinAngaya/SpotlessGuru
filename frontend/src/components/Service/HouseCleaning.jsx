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
  <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>Is your home in need of a little extra attention?</h1>
  <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>Spotless Guru house cleaning services are guaranteed to get your home gleaming clean! The best part is that you get to sit back and relax while we do the dirty work!</p>
    </div>
    <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>Our House Cleaning Includes</h1>
      
    <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
      
      <img src={kitchen} alt='kitchen cleaning' />
      <div>
      <h1 className='p-3 font-bold font-signature text-4xl text-customBlue'>Kitchen Cleaning</h2>
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
