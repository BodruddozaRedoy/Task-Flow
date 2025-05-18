import React from 'react'
import { VscTasklist } from "react-icons/vsc";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='p-6 w-full'>
        {/* sidebar header  */}
        <div className='flex items-center gap-3'>
            <VscTasklist className='text-4xl'/>
            <h1 className='font-raleway text-2xl font-bold'>TaskFlow</h1>
        </div>
        <hr className='my-5'/>

        {/* sidebar links  */}
        <div className='w-full'>
            <Link to={"/"} className=''><p className='w-full font-semibold py-3 px-5 primary-bg rounded-lg'>Home</p></Link>
        </div>
    </div>
  )
}
