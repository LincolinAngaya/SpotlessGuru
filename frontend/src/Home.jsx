import React from 'react'
import Footer from './components/Footer/Footer'
  import Slider2 from './components/Hero/Slider2'
 import BookingSteps from './components/Footer/BookingSteps'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';
function Home() {
    return (
        <>
        <Slider2 /> 
       <BookingSteps />
       <Footer />

       
        </>
    )
}

export default Home