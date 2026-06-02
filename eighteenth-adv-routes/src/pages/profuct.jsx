import React from 'react'
import { useNavigate } from 'react-router-dom';

const profuct = () => {
    let navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl bg-black text-white flex justify-center py-30">product page</h1>
      <button onClick={()=>{
        navigate("/product/:id");
      }} className="bg-green-400 w-fit mx-[50%] translate-x-[-50%] mb-[20px] px-8 py-1 rounded-md text-md uppercase tracking-widest active:scale-95">details</button>
    </div>
  )
}

export default profuct
