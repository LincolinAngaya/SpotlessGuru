import React from 'react'
import Footer from './components/Footer/Footer'
 import Slider2 from './components/Hero/Slider2'
 import BookingSteps from './components/Footer/BookingSteps'
import Navbar from './components/Navbar/Navbar'
import HouseCleaning from './components/Service/HouseCleaning'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';

function Home() {
    return (
        <>
  
        <Router> 
    
           <Navbar/>
         
       </Router>
       <Slider2 />
       <BookingSteps />
       
      
       <Footer />
       <HouseCleaning />
        </>
    )
}

export default Home