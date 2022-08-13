import React from 'react'
import Form from './Form';
import Signup from './signup';
import Home from './Home';
import Protected from './Protected';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Form />} />
          <Route path="/protected" element={<Protected/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
