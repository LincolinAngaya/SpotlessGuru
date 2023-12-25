import React from 'react';
import house from '../assets/house.jfif';
import blackpeople from '../assets/blackpeople.png';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <>
      <div>
        <h2 className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>About  us</h2>
      </div>
      <div className='image flex flex-col sm:flex-row gap-8 items-center'>
  <div className='ml-10 mb-4 sm:mb-0 max-w-md'>
    <img
      src={blackpeople}
      alt='House cleaning'
      className='object-cover w-full'
    />
  </div>
  <div className="flex-1">
    <p className="block text-customBlue text-base sm:text-lg text-center p-2 md:text-xl lg:text-2xl xl:text-3xl">
      Welcome to Spotless Guru Cleaners, your trusted partner for professional cleaning services. We are a dedicated team of cleaning experts with a passion for providing clean and healthy environments for homes and rooms. With years of experience and a commitment to excellence, we take pride in making your spaces shine.
    </p>
  </div>
</div>







<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4 sm:py-4 md:py-6 lg:py-8 xl:py-10 justify-center items-start'>
  {/* Card 1 */}
  <div className='flex flex-col items-center justify-start bg-gradient-to-b from-customBlue to-sky text-white border border-sky-400 rounded-md p-6 shadow-lg h-full transition-transform transform hover:bg-sky cursor-pointer'>
    <h2 className='text-2xl font-bold font-signature mb-2 text-center'>Our Mission</h2>
    <p className='break-words'>
      We aim to make your life better by taking care of the cleaning tasks
      that can be time-consuming and strenuous. We believe that a clean space
      is the foundation for a happier and healthier life.
    </p>
  </div>

  {/* Card 2 */}
  <div className='flex flex-col items-center justify-start bg-gradient-to-b from-customBlue to-sky text-white border border-sky-400 rounded-md p-6 shadow-lg h-full transition-transform transform hover:bg-sky cursor-pointer'>
    <h2 className='text-2xl font-bold font-signature mb-2 text-center'>Our Vision</h2>
    <p>
      To create a cleaner and healthier world, one space at a time, where individuals thrive in environments that promote well-being and happiness. We envision a future where cleanliness is not just a service but a lifestyle, contributing to a sustainable and harmonious planet for generations to come
    </p>
  </div>

  {/* Card 3 */}
  <div className='flex flex-col items-center justify-start bg-gradient-to-b from-customBlue to-sky text-white border border-sky-400 rounded-md p-6 shadow-lg h-full transition-transform transform hover:bg-sky cursor-pointer'>
    <h2 className='text-2xl font-bold font-signature mb-2 text-center'>Our Values</h2>
    <ul className='list-disc list-inside text-white p-4 rounded-md'>
      <li className='flex items-center'><span className='text-white mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Quality</li>
      <li className='flex items-center'> <span className='text-white  mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Reliability</li>
      <li className='flex items-center'><span className='text-white  mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Safety</li>
      <li className='flex items-center'><span className='text-white  mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Professionalism</li>
    </ul>
  </div>

  {/* Card 4 */}
  <div className='flex flex-col items-center justify-start bg-gradient-to-b from-customBlue to-sky text-white border border-sky-400 rounded-md p-6 shadow-lg h-full transition-transform transform hover:bg-sky cursor-pointer'>
    <h2 className='text-2xl font-bold font-signature mb-2 text-center'>Why Us?</h2>
    <ul className='list-disc list-inside text-white p-4 rounded-md'>
      <li className='flex items-center'><span className='text-white  mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Customized services</li>
      <li className='flex items-center'><span className='text-white  mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Experienced Team</li>
      <li className='flex items-center'><span className='text-white  mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Eco-friendly Approach</li>
      <li className='flex items-center'><span className='text-white mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Satisfaction Guarantee</li>
    </ul>
  </div>
</div>

      <div>
        <p className='flex items-center justify-center h-full text-customBlue font-signature text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-10'>Join Us In Our Journey Today</p>
      </div>
      <Footer/>
     
    </>
  );
}

export default About;
