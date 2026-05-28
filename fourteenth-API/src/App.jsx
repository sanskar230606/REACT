import React from 'react'
import axios from 'axios'

const App = () => {

  //normal method
  async function getdata(){
    let response = await fetch("url");
    let data = await response.json();
    console.log(data);
  }

  //using axios
  async function getresponse(){
    let response = await axios.get("urlx");
    // let data = await response.json(); //no need of this line
    console.log(data);
  }



  return (
    <div>
      <button onClick={getdata} >
        click me 
      </button>
    </div>
  )
}

export default App
