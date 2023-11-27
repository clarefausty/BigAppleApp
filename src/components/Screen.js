import React from 'react'
// import { Container, Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewPage from '../pages/ReviewPage';
import Page1 from '../pages/Page1';

const Screen = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Page1/>} />
        
        <Route path='/review' element={<ReviewPage/>}/>
       
        </Routes>
        </BrowserRouter>
        

    
  )
}

export default Screen