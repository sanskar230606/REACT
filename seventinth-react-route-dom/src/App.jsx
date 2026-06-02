import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Courses from './pages/courses';
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      < Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
