import React from 'react'
import { MoveRight } from 'lucide-react';
const Rightcardcontent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full px-8 py-13 flex flex-col justify-between'>
            <h1 className='h-12.5 w-12.5 rounded-full bg-white flex items-center justify-center text-3xl'>{props.id+1}</h1>
            <div className='flex flex-col gap-10'>
                <p className='tracking-[0.13rem] text-xl text-white'>{props.intro}</p>
                <div className='relative w-fit'>
                    <button className='bg-lime-400 uppercase tracking-[0.1rem] text-black rounded-full px-6 py-3 pr-14 font-medium shadow-lg'>{props.tag}</button>
                    <button className='absolute top-1/2 -translate-y-1/2 right-1 w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center'><MoveRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Rightcardcontent
