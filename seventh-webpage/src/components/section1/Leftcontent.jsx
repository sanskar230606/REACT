import React from 'react'
import Herotext from './Herotext';
import Arrow from './Arrow';

const Leftcontent = () => {
  return (
    <div className='h-full w-1/4 flex flex-col justify-between px-10 py-14'>
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default Leftcontent
