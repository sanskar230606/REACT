import React, { useState } from 'react'
import Navbar from './Components/Navbar';

const App = () => {
  const [theme, settheme] = useState("light")
  return (
    <div className="h-screen w-screen bg-black text-white">
      <h1 className="capitalize">theme is {theme}</h1>
      <Navbar theme={theme} settheme={settheme} />
    </div>
  )
}

export default App
