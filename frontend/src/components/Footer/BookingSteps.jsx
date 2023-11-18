import React from 'react'
import order from '../assets/order.png'
import come from '../assets/come.png'
import clean from '../assets/Clean.png'
import happy from '../assets/happy.png'


function BookingSteps() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center py-6">
    <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">So How Does It Work ?</h1>
    <p className="font-bold font-sans text-sky text-2xl md:text-1xl xl:text-1xl">Just follow these simple steps</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4  justify-center items-center">
  <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg">
        <img src={order} alt="order now" className="border border-sky-400 rounded-full p-5 ring-2 ring-sky-400 "
        style={{ maxWidth: '120px' }} />
        <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
        You Order</h1>
      <p className='mb-4 font-serif whitespace-normal sm:whitespace-pre md:whitespace-nowrap lg:whitespace-pre-line xl:whitespace-pre-wrap'>Create your account or log in and place order  </p>
    </div>

    <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg">
        <img src={come} alt="come now" className="border border-sky-400 rounded-full p-5 ring-2 ring-sky-400"
        style={{ maxWidth: '120px' }} />
        <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">We Come</h1>
        <p className='mb-4 font-serif whitespace-normal sm:whitespace-pre md:whitespace-nowrap lg:whitespace-pre-line xl:whitespace-pre-wrap'>we send cleaner based on your location and service</p>
   </div>

   <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg">
      <img src={clean} alt="clean now" className="border border-sky-400 rounded-full p-1 ring-2 ring-sky-400"
      style={{ maxWidth: '120px' }} />
      <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">We Clean</h1>
      <p className='mb-4 font-serif whitespace-normal sm:whitespace-pre md:whitespace-nowrap lg:whitespace-pre-line xl:whitespace-pre-wrap'>We proffessionally clean you space based on your preference</p>
  </div>
   
  <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg">
      <img src={happy} alt="happy now" className="border border-sky-400 rounded-full p-5 ring-2 ring-sky-400 bg-white "
      style={{ maxWidth: '120px' }}/>
      <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">You Smile</h1>
      <p className='mb-4 font-serif whitespace-normal sm:whitespace-pre md:whitespace-nowrap lg:whitespace-pre-line xl:whitespace-pre-wrap'>we make you smile with Satisfaction and give us feedback</p>
  </div>
 
</div>
</div>
  )
}

export default BookingSteps