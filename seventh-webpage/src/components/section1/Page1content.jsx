import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'


const Page1content = (props) => {
  return (
    <div className=' flex relative gap-4 px-4 justify-between items-center h-[89vh]' > 
      <Leftcontent/>
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
