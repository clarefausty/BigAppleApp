import React from 'react'
// import { Container, Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewPage from '../pages/ReviewPage';
import Page1 from '../pages/Page1';
import CreateEstimatePage from '../pages/CreateEstimatePage';

const Screen = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Page1/>} />
        
        <Route path='/review' element={<ReviewPage/>}/>
        <Route path='/createestimate' element={<CreateEstimatePage/>}/>
       
        </Routes>
        </BrowserRouter>
        

    
  )
}

export default Screen