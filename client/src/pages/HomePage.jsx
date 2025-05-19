import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskSection from '../components/TaskSection'

export default function HomePage() {
  return (
    <div className='h-screen flex flex-col lg:flex-row'>
        <div className='w-full lg:w-[20%]'><Sidebar/></div>
        <div className='w-full lg:p-5'><TaskSection/></div>
    </div>
  )
}
