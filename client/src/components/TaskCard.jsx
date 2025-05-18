import React from 'react'
import { PiTimerFill } from "react-icons/pi";


export default function TaskCard({task}) {
  return (
    <div className='p-5 rounded-lg primary-bg'>
        <p className='text-gray-400 font-semibold flex items-center gap-2 mb-4'><PiTimerFill/> {task?.date}</p>
        <h1 className='font-semibold text-lg'>{task?.title}</h1>
        <p className='text-gray-400 font-semibold'>{task?.desc}</p>
        <hr className='my-3'/>
        <div className='flex items-center justify-between'>
            <p className='text-sm font-semibold'>Time Left: 2</p>
            <div className='py-1 text-sm cursor-pointer select-none px-2 rounded-lg secondary-bg'>On Progress</div>
        </div>
    </div>
  )
}
