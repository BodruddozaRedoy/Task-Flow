import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskSection from '../components/TaskSection'

export default function HomePage() {
  return (
    <div className='h-screen flex'>
        <div className='w-[20%]'><Sidebar/></div>
        <div className='w-full p-5'><TaskSection/></div>
    </div>
  )
}
