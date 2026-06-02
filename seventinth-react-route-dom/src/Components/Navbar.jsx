import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-15 w-screen bg-white flex items-center justify-between px-10" >
      <div className="">
        <h1 className="hover:underline" ><Link to='/'>Protfolio.me</Link></h1>
      </div>
      <div className="flex items-center gap-6">
        <Link to='/'>Home</Link>
        <Link to='/courses'>courses</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact us</Link>
      </div>
    </div>
  )
}

export default Navbar
