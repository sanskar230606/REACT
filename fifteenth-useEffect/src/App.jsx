import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, seta] = useState(0)
  function aincre() {
    seta(a+1);
  }
  function adecr() {
    seta(a-1);
  }

  //it will be executes each time whenever there iis something changed in the react rendering process
  useEffect(function(){
    console.log('its running');
  })

  //now the dependencies useeffect
  useEffect(function(){
    console.log("runnung on dependencies of a");
  },[a]);

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={aincre}>increment a</button>
      <button onClick={adecr}>decrement a</button>
    </div>
  )
}

export default App
