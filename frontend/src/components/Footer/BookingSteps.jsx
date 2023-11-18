import React from 'react'
import order from '../assets/order.png'
import come from '../assets/come.png'
import clean from '../assets/clean.png'
import happy from '../assets/happy.png'


function BookingSteps() {
  return (
    <div>
        <div>
        
         <h1>So How Does It Work</h1>
          <p>Just follow this simple steps</p>
         </div>


<div>
    <div>
    <img src={order} alt="order now" />
     <h1>You Order</h1>
     <p>Create your account or log in and place order</p>
    </div>

    <div>
    <img src={come} alt="come now" />
    <h1>We Come</h1>
    <p>we send clreaner based on your location and service</p>
   </div>

   <div>
   <img src={clean} alt="clean now" />
   <h1>We Clean</h1>
   <p>We proffessionally clean you space based on your preference</p>
  </div>
   
  <div>
  <img src={happy} alt="happy now" />
   <h1>You Smile</h1>
   <p>we make you smile with Satisfaction and give us feedback</p>
  </div>
 
</div>
</div>
  )
}

export default BookingSteps