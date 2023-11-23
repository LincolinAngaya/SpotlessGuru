import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HouseCleaning from './components/Service/HouseCleaning'
import DishWashing from './components/Service/DishWashing';
import HandWashing from './components/Service/HandWashing';
import Home from './Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';


function App() {
    return (
        <>
  
        <Router> 
             <div>
             <Navbar/>
             <Routes>
             <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/housecleaning' element={<HouseCleaning />}></Route>
              <Route exact path='/dishwashing' element={<DishWashing/>}></Route>
              <Route exact path='/handwashing' element={<HandWashing />}></Route>
             </Routes>
             
             </div>
        </Router>
      

       
        </>
    )
}

export default App