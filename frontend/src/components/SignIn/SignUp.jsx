import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signin from '../assets/siginin.jpg';
import google from '../assets/google.svg';

function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    // Add your login logic here
  };

  return (
    <div className='flex w-full h-screen items-start'>
      <div className='relative w-1/2  h-full flex flex-col'>
        <div className='absolute top-[20%] left-[5%] flex flex-col '>
          <h1 className='text-4xl text-white font-bold my-4'>Spotless Spaces, Smiling Faces.</h1>
          <p className=' text-xl text-normal text-white'>Transforming your spaces into pristine havens, where smiles bloom.</p>
        </div>

        <img src={signin} className='w-full h-full object-cover' alt="Placeholder" />
      </div>

      <div className='w-full h-full flex flex-col p-20 justify-between items-center'>
      <h1 className='font-semibold text-xl text-customBlue mr-auto'>SpotlessGuru</h1>

      <div className='w-full  flex flex-col  max-w-[500px]'>
      <div className='w-full flex flex-col mb-2 '>
         <h3 className='text-3xl text-sky font-semibold mb-2'>SignUp</h3>
         <p className='text-base mb-2'>Welcome To Spotless Guru</p>
      </div>

      <div className='w-full flex-col'>
      <input
      placeholder='Enter your Name'
      type="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className='w-full text-customBlue my-2 py-2 bg-transparent border-b border-customBlue focus:outline-none'
      required
    />
    <input
     placeholder='Enter your Phone Number'
    type="phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className='w-full text-customBlue my-2 py-2 bg-transparent border-b border-customBlue focus:outline-none'
    required
  />
      <input
       placeholder='Enter your Email'
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='w-full text-customBlue my-2 py-2 bg-transparent border-b border-customBlue focus:outline-none'
      required
    />

    <input
     placeholder='Enter your Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full text-customBlue my-2 py-2 bg-transparent border-b border-customBlue focus:outline-none'
                required
      />
      
      
      </div>

     
      </div>
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-customBlue'>Already have an Account?
        <Link to="/signin" className='font-semibold underline underline-offset-2 cursor-pointer'>
    Sign In
  </Link> </p>
      </div>


      <div className='w-full flex flex-col my-4'>
      <button
      type="button"
      onClick={handleLogin}
      className='bg-navy text-white my-2 font-semibold text-center flex items-center  justify-center rounded-md hover:bg-sky w-full cursor-pointer'
    >
      Sign Up
    </button>

 
      </div>
      

     
     


      
      </div>
      
      </div>
   
  );
}

export default SignUp;
