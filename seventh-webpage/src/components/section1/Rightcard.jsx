import React from 'react'
import Rightcardcontent from './Rightcardcontent';

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl ' >
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <Rightcardcontent tag={props.tag} intro={props.desc} key={props.key} id={props.id}/>
    </div>
  )
}

export default Rightcard
