import React from 'react'
import Footer from './components/Footer/Footer'
  import HeroSection from './components/Hero/HeroSection'
 import BookingSteps from './components/Footer/BookingSteps'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';
function Home() {
    return (
        <>
        <HeroSection /> 
       <BookingSteps />
       <Footer />

       
        </>
    )
}

export default Home