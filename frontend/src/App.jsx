import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HouseCleaning from './components/Service/HouseCleaning'
import DishWashing from './components/Service/DishWashing';
import HandWashing from './components/Service/HandWashing';
import Testimonial from './components/Testimonial/Testimonial';
import Home from './Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
// import SignInSignUp from './components/Login/SignInSignUp'; 
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignIn/SignUp';



function App() {
    return (
        <>
  
        <Router> 
             <div>
             <Navbar/>
             <Routes>
             <Route exact path='/' element={<Home />}></Route>
              <Route exact path='services/housecleaning' element={<HouseCleaning />}></Route>
              <Route exact path='services/dishwashing' element={<DishWashing/>}></Route>
              <Route exact path='services/handwashing' element={<HandWashing />}></Route>
              <Route exact path='testimonials' element={<Testimonial />}></Route>
              <Route exact path='contact' element={<Contact/>}></Route>
              <Route exact path='about' element={<About/>}></Route>
              <Route exact path='signup' element={<SignUp/>}></Route>
              <Route exact path='signin' element={<SignIn/>}></Route>

             </Routes>
             
             </div>
        </Router>
      

       
        </>
    )
}

export default App