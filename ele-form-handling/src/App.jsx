import React from 'react'

const App = () => {


  let formSUbmit = ()=>{
    console.log("submitted")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        formSUbmit();
      }}>
        <input placeholder='enter your name' type="text" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
