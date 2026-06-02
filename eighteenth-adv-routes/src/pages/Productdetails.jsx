import React from 'react'
import { useParams } from 'react-router-dom';

const Productdetails = () => {
    let params = useParams();
    console.log(params);
    
  return (
    <div className="">
      <h1 className="text-4xl bg-black text-white flex justify-center py-30">product details page :<span className="uppercase mx-4">{params.id}</span> </h1>
    </div>
  )
}

export default Productdetails
