import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HouseCleaning from './components/Service/HouseCleaning'
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
             </Routes>
             
             </div>
        </Router>
      

       
        </>
    )
}

export default App