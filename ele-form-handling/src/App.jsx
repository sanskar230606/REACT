import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  let submitHandler = (e)=>{
    e.preventDefault();
    console.log("submitted by" , title);
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input placeholder='enter your name' type="text" value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
