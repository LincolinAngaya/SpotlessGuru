import React from 'react';

import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineClockCircle } from 'react-icons/ai';

const Contact = () => {
  return (
    <div >
      <h2 className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>Contact us</h2>
      <div className='container mx-auto shadow-md bg-white p-4'>
        <div className="bg-gray-100 p-4">
        <div className='relative'>


import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <>
      <div>
        <h2 className='bg-gradient-to-b from-customBlue to-sky text-white p-6 text-center font-signature text-3xl'>Contact us</h2>
      </div>
      <div className='relative'>

        <div className='container mx-auto mt-10 p-4 md:ml-16'>

          <div className='wrapper relative'>
            {/* Additional Container on Top */}
            <div className='absolute top-0 right-0 bg-navy text-white p-4 md:p-20 mb-4 md:mr-16'>
              <p className='text-center text-3xl'>Info</p>
              <p className='flex items-center'><AiOutlineMail className='mr-2' /> spotlessGuru@gmail.com</p>
              <p className='flex items-center'> <AiOutlinePhone className='mr-2' /> +25496286466</p>
              <p className='flex items-center'> <AiOutlineEnvironment className='mr-2'/> Karen, Nairobi</p>
              <p className='flex items-center'><AiOutlineClockCircle className='mr-2'/> Working Hours</p>
            </div>

            {/* Form Container */}
            <div>
              <h2 className='text-3xl text-customBlue font-bold mb-4'>Contact Us</h2>
              <form className='max-w-md'>
                <div className='mb-4'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter your Name'
                    className='mt-1 p-2 w-full border rounded-md'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your Email'
                    className='mt-1 p-2 w-full border rounded-md'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Enter your message'
                    className='mt-1 p-2 w-full border rounded-md resize-none'
                    required
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='bg-navy text-white px-2 py-2 rounded-md hover:bg-sky hover:text-customBlue w-full'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>

  );
};

export default Contact;
