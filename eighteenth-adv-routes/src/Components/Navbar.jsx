import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-15 w-screen bg-white flex items-center justify-between px-16" >
      <div className="">
        <h1 className="hover:underline uppercase tracking-widest" ><Link to="/">Portfolio.me</Link></h1>
      </div>
      <div className="flex items-center gap-8 uppercase tracking-wider">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
