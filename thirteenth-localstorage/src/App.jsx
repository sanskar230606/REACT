import React from 'react'

const App = () => {


  let user = {
    name : "sanskar",
    age:19,
    location:"nanded"
  }
  localStorage.setItem("user" , JSON.stringify(user)); //we converted user object to string because localstorage only accepts strings init.
  let data = JSON.parse(localStorage.getItem("user"));
  console.log(data);
  
  return (
    <div>
      
    </div>
  )
}

export default App
