import React from 'react'
import Footer from '../Footer/Footer'

function HandWashing() {
  return (
    <div>
    <div className='bg-gradient-to-b from-customBlue to-sky text-white font-bold p-6 text-center font-signature text-2xl sm:text-2xl md:text-2xl'>
    Clothes Hand Washing
  </div>
      <div className='mx-10 mt-5'>
      <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>Ready for Affordable Clothes Handwashing Services?</h1>
      <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>Enjoy sparkling clean clothes every week with our friendly-priced recurring hand washing services. Say goodbye to laundry worries without breaking the bank!</p>
      </div>

      <div>
      <h1>Our hand washing Includes</h1>
      <div>
      <div>
      <img src='' alt='Handwashing' />
      <ul>
        <li>
            <strong>Bedding:</strong>
            Hand washing of bed linens, sheets, pillowcases, and duvet covers to ensure a fresh and clean sleeping environment.
        </li>
        <li>
            <strong>Shoes:</strong>
            Gentle cleaning of shoes to remove dirt and stains. This can include various types of shoes, from casual sneakers to delicate dress shoes.
        </li>
        <li>
            <strong>Clothes:</strong>
            Handwashing services for a wide range of clothing items, including everyday wear, delicates, wool garments, activewear, and special fabrics.
        </li>
     </ul>

    <button type="button">Book Now</button>

      </div>
      
      </div>
      
      </div>
      <Footer />

    </div>
  )
}

export default HandWashing
