import React, { createContext, useState } from 'react'

// Create the context
export const themeDataContext = createContext()

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const [theme, setTheme] = useState('dark')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  // Sample data to pass through context
  const data = {
    isDark,
    setIsDark,
    theme,
    setTheme,
    sidebarOpen,
    setSidebarOpen,
    appName: 'Context API Demo',
    version: '1.0.0'
  }

  return (
    <themeDataContext.Provider value={data}>
      {children}
    </themeDataContext.Provider>
  )
}
