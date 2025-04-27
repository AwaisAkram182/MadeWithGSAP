 import React from 'react'
 import Navbar from '../src/Components/Navbar'
 import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
 import Faq from '../src/Components/Faq'
 import Hero from '../src/Components/Hero'
 
 const App = () => {
   return (
     <>
     <Router>
        <Navbar/>
          <Routes>
          <Route path='/Faq' element={<Faq/>} ></Route>
          <Route path='/' element={<Hero/>} ></Route>
          </Routes>
     </Router>
   
     </>
   )
 }
 
 export default App
 