import React from 'react'
import order from '../assets/order.png'
import come from '../assets/come.png'
import clean from '../assets/clean.png'
import happy from '../assets/happy.png'


function BookingSteps() {
  return (
    <div >
    <div className="flex flex-col items-center justify-center py-1">
    <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">So How Does It Work ?</h1>
    <p className="font-bold font-sans text-sky text-2xl md:text-1xl xl:text-1xl">Just follow these simple steps</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4 sm:py-4 md:py-6 lg:py-8 xl:py-10 justify-center items-center">


  <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg transition-transform transform hover:bg-sky cursor-pointer">
        <img src={order} alt="order now" className="border border-sky rounded-full p-5 ring-2 ring-sky "
        style={{ maxWidth: '120px' }} />
        <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl ">
        You Order</h1>
        <p className="mb-4 font-light text-center sm:text-lg md:text-xl lg:text-lg xl:text-xl">
        Go to our website and book a service of your choice
      </p>
    </div>

     <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg transition-transform transform hover:bg-sky cursor-pointer">
        <img src={come} alt="come now" className="border border-sky rounded-full p-5 ring-2  ring-sky "
        style={{ maxWidth: '120px' }} />
        <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">We Come</h1>
        <p className="mb-4 font-light text-center sm:text-lg md:text-xl lg:text-lg xl:text-xl">we send cleaner based on your location and service</p>
   </div>

   <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg transition-transform transform hover:bg-sky cursor-pointer">
      <img src={clean} alt="come now" className="border border-sky rounded-full p-1 ring-2 ring-sky "
      style={{ maxWidth: '120px' }} />
      <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">We Clean</h1>
      <p className="mb-4 font-light text-center sm:text-lg md:text-xl lg:text-lg xl:text-xl">We proffessionally clean you space based on your preference</p>
  </div>
   
  <div className="flex flex-col items-center justify-center bg-white border border-sky-400 rounded-md p-6 shadow-lg transition-transform transform hover:bg-sky cursor-pointer">
      <img src={happy} alt="happy now" className="border border-sky rounded-full p-5 ring-2  ring-sky  bg-white "
      style={{ maxWidth: '120px' }}/>
      <h1 className="font-bold font-sans text-customBlue text-2xl md:text-3xl lg:text-2xl xl:text-3xl">You Smile</h1>
      <p className="mb-4 font-light text-center sm:text-lg md:text-xl lg:text-lg xl:text-xl">we make you smile with Satisfaction and give us feedback !</p>
  </div>
 
</div>
</div>
  )
}

export default BookingSteps