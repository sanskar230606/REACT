import React, { createContext } from 'react'
export let themeDataContext = createContext();
const ThemeContext = (props) => {
  return (
    <div>
      <themeDataContext value='sanskar'>
        {props.children}
      </themeDataContext>
    </div>
  )
}

export default ThemeContext
