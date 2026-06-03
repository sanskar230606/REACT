import React from 'react'

const Navbar = (props) => {
    function changeTheme (){
        props.settheme("dark");
    }
  return (
    <div>
      <button onClick={changeTheme}  className="bg-white px-4 py-2 rounded text-black active:scale-95">change theme</button>
      <p>theme changed to : {props.theme}</p>
    </div>
  )
}

export default Navbar
