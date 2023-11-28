import React, { useState } from 'react';
import signin from '../assets/siginin.jpg';

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
        <div className='absolute top-[25%] left-[5%] flex flex-col '>
          <h1 className='text-4xl text-white font-bold my-4'>Spotless Spaces, Smiling Faces.</h1>
          <p className=' text-xl text-normal text-white'>Transforming your spaces into pristine havens, where smiles bloom.</p>
        </div>

        <img src={signin} className='w-full h-full object-cover' alt="Placeholder" />
      </div>

      <div className='w-1/2 p-4'>
        <form className="max-w-sm mx-auto">
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className='bg-navy text-white px-2 py-2 rounded-md hover:bg-sky w-full'
          >
            Login
          </button>
        </form>

        <div className='mx-auto mt-2 text-center'>
          <h1>Don't have an Account?</h1>
          <button className='bg-navy text-white px-4 py-2 rounded-md mt-2 hover:bg-sky' type="button">
            Register
          </button>
          <h2>OR</h2>
          <div>Sign In with Google</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
