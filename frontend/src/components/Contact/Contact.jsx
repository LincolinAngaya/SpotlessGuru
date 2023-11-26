import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineClockCircle } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <h2 className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>Contact us</h2>
      <div className='container mx-auto shadow-md bg-white p-4'>
        <div className="bg-gray p-4">
          <div className='flex flex-col md:flex-row gap-8 items-center'>
             {/* Form Container */}
            <div className='md:flex-1 mb-4 md:mb-0'>
              <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
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
              className='bg-navy text-white px-2 py-2 rounded-md hover:bg-sky w-full'
            >
              Send
            </button>
                
              </form>
            </div>
            <div className='bg-navy text-white flex-1 p-4 mt-4 rounded-md'>
  <p className='text-center text-2xl font-bold mb-2'>Info</p>
  <p className='flex items-center justify-center text-xl'>
    <AiOutlineMail className='mr-2' /> spotlessGuru@gmail.com
  </p>
  <p className='flex items-center justify-center text-xl'>
    <AiOutlinePhone className='mr-2' /> +25496286466
  </p>
  <p className='flex items-center justify-center text-xl'>
    <AiOutlineEnvironment className='mr-2'/> Karen, Nairobi
  </p>
  <p className='flex items-center justify-center text-xl'>
    <AiOutlineClockCircle className='mr-2'/> 7:00 a.m - 6:00 p.m
  </p>

  {/* Social Media Icons */}
  <div className='flex items-center justify-center mt-4'>
    <a href="#facebook" className='text-white mr-4 p-2 cursor-pointer inline-flex items-center
      rounded-full mx-2.5 text-2xl hover:text-white hover:hover:text-sky
      duration-300' target="_blank" rel="noopener noreferrer">
      <FaFacebook size={20} />
    </a>
    <a href="#twitter" className='text-white mr-4 p-2 cursor-pointer inline-flex items-center
      rounded-full mx-2.5 text-2xl hover:text-white hover:hover:text-sky
      duration-300' target="_blank" rel="noopener noreferrer">
      <FaTwitter size={20} />
    </a>
    <a href="#instagram" className='text-white mr-4 p-2 cursor-pointer inline-flex items-center
      rounded-full mx-2.5 text-2xl hover:text-white hover:hover:text-sky
      duration-300' target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} />
    </a>
    <a href="#linkedin" className='text-white p-2 cursor-pointer inline-flex items-center
      rounded-full mx-2.5 text-2xl hover:text-white hover:hover:text-sky
      duration-300' target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={20} />
    </a>
  </div>
</div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
