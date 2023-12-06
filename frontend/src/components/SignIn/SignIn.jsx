import React, { useState } from 'react';
import signin from '../assets/siginin.jpg';
import google from '../assets/google.svg';
import { Link } from 'react-router-dom';

function SignIn() {
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
    

      <div className='w-full  flex flex-col  max-w-[500px]'>
      <div className='w-full flex flex-col mb-2 '>
         <h3 className='text-3xl text-sky text-center font-semibold mb-2'>Login</h3>
         <p className='text-base mb-2'>Welcome Back! Enter your Details</p>
      </div>

      <div className='w-full flex-col'>
      <input
      type="email"
      placeholder='Enter Your Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='w-full text-customBlue my-2 py-2 bg-transparent border-b border-customBlue focus:outline-none'
      required
    />

    <input
                type="password"
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full text-customBlue my-2 py-2 bg-transparent border-b border-customBlue focus:outline-none'
                required
      />
      
      
      </div>

      <div className='w-full flex items-center justify-between'>
      <div className='w-full flex items-center'>
      <input  type='checkbox' className='w-4 h-4 mr-2' />
      <p className='text-sm'>Remember Me</p>

       </div>
       <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password</p>

      </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-customBlue'>Dont have an Account?
        <Link to='/signup'>
        <span className='font-semibold underline underline-offset-2 cursor-pointer' >Sign Up</span></Link> </p>
      </div>


      <div className='w-full flex flex-col my-4'>
      <button
      
      type="button"
      onClick={handleLogin}
      className='bg-navy text-white my-2 font-semibold text-center flex items-center  justify-center rounded-md hover:bg-sky w-full cursor-pointer'
    >
      Login
    </button>
<Link to='/signup'>
    <button
    
      type="button"
      onClick={handleLogin}
      className='bg-navy text-white my-2 font-semibold  border-2 border-sky text-center flex items-center  justify-center rounded-md hover:bg-sky w-full cursor-pointer'
    >
      Register
    </button>
    </Link>
      </div>
      <div className='w-full flex items-center justify-center relative py-2'>
      <div className='w-full h-[1px] bg-customBlue'></div>
      <p className='text-lg absolute text-customBlue/80 bg-white'>OR</p>
      </div>

      <div
      
      className='bg-navy text-white my-2 font-semibold  border-2 border-sky/40 text-center flex items-center  justify-center rounded-md hover:bg-sky w-full cursor-pointer'
    ><img src={google} alt='google' className='h-6 mr-2'/>
      Sign In With Google
    </div>
     


      
      </div>
      
      </div>
   
  );
}

export default SignIn;
