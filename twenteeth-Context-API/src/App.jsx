import React from 'react'
import Navbar from './Components/Navbar'
import { ThemeProvider } from './Context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="h-screen w-screen bg-black">
        <Navbar />
        <main className="w-full h-[calc(100vh-80px)]">
          {/* Your main content goes here */}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
