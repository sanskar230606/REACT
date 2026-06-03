import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { themeDataContext } from '../Context/ThemeContext'


const Navbar = () => {
  const data = useContext(themeDataContext)
  console.log('Context Data:', data)
  
  return (
    <div>
      <Nav2 contextData={data}/>
    </div>
  )
}

export default Navbar
