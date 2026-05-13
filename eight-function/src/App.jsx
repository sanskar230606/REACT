import React from 'react'

const App = () => {
  function name(elem) {
    console.log(elem.target.value);
  }
  return (
    <div>
      <h1>app , user</h1>
      <button >change user</button>
      <input onChange={name} type="text" placeholder='enter name' />
    </div>
  )
}

export default App
