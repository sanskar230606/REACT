import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    let navigate = useNavigate();
  return (
    <div className=" w-screen rounded item-center z-100 sticky top-0">
        <div className=" w-fit flex gap-4 px-10 py-3 my-6 rounded absolute left-1/2 -translate-x-1/2">
            <button 
            onClick={()=>{
                navigate('/');
            }} 
            className="bg-green-400 px-8 py-1 rounded-md text-md uppercase tracking-widest active:scale-95">go to home page</button>
            <button 
            onClick={()=>{
                navigate(-1);
            }}
            className="bg-green-400 px-8 py-1 rounded-md text-md uppercase tracking-widest active:scale-95">previous</button>
            <button 
            onClick={()=>{
                navigate(+1);
            }}
            className="bg-green-400 px-8 py-1 rounded-md text-md uppercase tracking-widest active:scale-95">next</button>
        </div>
    </div>
  )
}

export default Navbar2
