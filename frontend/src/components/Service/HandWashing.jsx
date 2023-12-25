import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'; 
import wash from '../assets/wash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function HandWashing() {
  return (
    <div>
    <div className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>
    Clothes Hand Washing
  </div>
      <div className='mx-10 mt-5'>
      <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>Ready for Affordable Clothes Handwashing Services?</h1>
      <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>Enjoy sparkling clean clothes every week with our friendly-priced recurring hand washing services. Say goodbye to laundry worries without breaking the bank!</p>
      </div>





      <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
      <div>
      <h1 className='p-3 font-bold font-signature text-2xl sm:text-2xl md:text-2xl lg:text-4xl text-customBlue'>Our hand washing Includes</h1>
    
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>
            <strong>Bedding:</strong><br />
            Hand washing of bed linens, sheets, pillowcases, and duvet covers to ensure a fresh and clean sleeping environment.
        </li>
        <li className='items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>
            <strong>Shoes:</strong><br />
            Gentle cleaning of shoes to remove dirt and stains. This can include various types of shoes, from casual sneakers to delicate dress shoes.
        </li>
        <li className='items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>
            <strong>Clothes:</strong><br />
            Handwashing services for a wide range of clothing items, including everyday wear, delicates, wool garments, activewear, and special fabrics.
        </li>
     </ul>

     <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
       Book Now
     </Link>
    

      </div>
      <img src={wash}  className='rounded-l-lg' height="400" width="500" alt='hand washing' />
      
     
      
      </div>
      <Footer />

    </div>
  )
}

export default HandWashing
