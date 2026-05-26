import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);
  
  let noteDelete=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx ,1);
    setTask(copyTask);
  }

  let formHandler = (e)=>{
    e.preventDefault();  
    let copyTask = [...task];
    
    // console.log(task);
    copyTask.push({
      title:title,
      description:desc
    });
    setTask(copyTask);
    // console.log(task);
    
    setTitle("");
    setDesc("");
    console.log("form submitted",);
  }

  return (
    <div className="h-screen text-white bg-black scroll-smooth">

      <form onSubmit={(e)=>{
        formHandler(e);
      }} className="flex lg:flex-row md:flex-col justify-between py-6 px-10">
        <div className="flex flex-col gap-16 py-30 w-1/2">
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}
          } type="text" required placeholder="TITLE" className="px-8 py-4 border-2 outline-0 text-2xl rounded-md" />
          <input value={desc} onChange={(e)=>{setDesc(e.target.value)}} type="text" required placeholder="DESCRIPTION" className="px-8 py-4 border-2 outline-0 text-2xl rounded-md"/>
          <button id="btn" className="durationn-1000 ease-in-out uppercase px-6 py-3 rounded-md text-black bg-white tracking-[8px] border-black">add note+</button>
        </div>
        <img className="h-140 scale-80 rotate-20" src="./image copy.png" alt="error" />
      </form>

      <div className="px-10 flex flex-col gap-20">
        <h1 className="uppercase px-10 py-4 bg-gray-500 text-xl tracking-[14px] font-thin rounded-md text-white">all notes...</h1>
        <div className="flex gap-4 shrink-0 flex-wrap justify-center-safe"> 
          

          {task.map(function(elem,idx){
            
            return <div key={idx} id={idx} className="h-80 w-80  m-1 relative">
            <img className="min-h-full min-w-full scale-130 translate-x-2 translate-y-1.5" src="./image.png" alt="error" />
            <div className="absolute bottom-13 left-15 h-50 w-50 opacity-80 rounded-lg p-3 flex flex-col gap-1.5">
              <h1 onClick={noteDelete} className="text-black rounded-full p-1.5 bg-white w-fit" ><X /></h1>
              <h2 className="uppercase wrap-break-word text-black font-medium">title : {elem.title}</h2>
              <h4 className="uppercase wrap-break-word text-black text-sm font-extralight">description : {elem.description}</h4>
            </div>
          </div>;
          })}
          
        </div>
      </div>

    </div>
  )
}

export default App

