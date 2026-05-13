import React, { useState } from 'react'

const App = () => {
  
  const [a, setfirst] = useState(0);

  function increase() {
    setfirst(a+1);
  }
  function decrease() {
    setfirst(a-1);
  }
  function by5() {
    setfirst(a+5);
  }

  return (
    <div>
      <h1>value of a is {a}</h1>
      <button onClick={increase} >increase</button>
      <button onClick={decrease} >decrease</button>
      <button onClick={by5} >increase by 5 </button>
      
    </div>
  )
}

export default App
