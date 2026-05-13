import React from 'react'
import { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState([10,20,30])
  const [w, rf] = useState(10)
  function fdjbvjb() {
    const newa = [...first];
    newa.push(34);
    setfirst(newa)
  }
  let ince3 = ()=>{
    rf((w)=>(w+1));
    rf((w)=>(w+1));
    rf((w)=>(w+1));
  }
  return (
    <div>
      <h1>{w}</h1>
      <button onClick={fdjbvjb}>change array</button>
      <button onClick={ince3}>increase by 3</button>
    </div>
  )
}

export default App
