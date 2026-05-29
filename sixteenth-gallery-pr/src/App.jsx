import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setindex] = useState(1)

  async function getData() {
    console.log('working');
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data);
    console.log(response);
  }

  useEffect(function(){
    getData();
  },[index])
  let printUserData = "Loading.....";
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div>
        <a href={elem.url} target="_blank">
          <div>
            <img className="h-50 object-cover" src={elem.download_url} alt="error" />
          </div>
          <h1>{elem.author}</h1>
        </a>
      </div>
    })
  }
  return (
    <div className="bg-black overflow-auto text-white h-screen p-4">
      <h1 className="fixed text-2xl text-cyan-400 bg-amber-500 p-2 rounded-xl" >current page : {index}</h1>
      <div className="flex flex-wrap gap-3 mt-10">{printUserData}</div>
      <div class="flex gap-3 mt-4">
        <button onClick={()=>{
          if(index>1){
            setindex(index-1);
          }
        }}
          class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition"
        >
          Prev
        </button>
        <h2 className="p-2 uppercase">page : {index}</h2>
        <button onClick={()=>{
          setindex(index+1);
        }}
          class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
