import React from 'react'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Cyber from './pages/Cyber';
import AiMl from './pages/AiMl';
import Webdev from './pages/Webdev';
import Navbar2 from './Components/Navbar2';
import Profuct from './pages/profuct';
import Productdetails from './pages/Productdetails';


const App = () => {
  return (
    <div className="bg-black h-full w-full">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>

        <Route path="/courses" element={<Courses />}>
          <Route path="aiml" element={<AiMl />}/>
          <Route path="webdev" element={<Webdev />}/>
          <Route path="cyber" element={<Cyber />}/>
        </Route>

        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Notfound />}/>
        <Route path="/product" element={<Profuct />}/>
        <Route path="/product/:id" element={<Productdetails/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
