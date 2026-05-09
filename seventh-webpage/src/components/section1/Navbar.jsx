import React from 'react'
import { PhoneCall } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-6' >
      <h4 className='bg-black text-white px-5 py-2 rounded-xl uppercase tracking-widest' >Target Audience</h4>
      <button className='bg-gray-300 flex gap-3 tracking-widest px-5 uppercase py-2 rounded-lg' ><i className='font-thin' ><PhoneCall/></i>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
