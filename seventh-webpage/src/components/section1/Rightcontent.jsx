import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-3/4 py-10 flex flex-nowrap gap-7 relative overflow-x-auto'>
      {props.users.map(function(elem , idx){
        return <Rightcard key={idx} id={idx} img={elem.img} desc={elem.intro} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
