import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'

function Stack() {
    const Text = useSelector((state)=>state.stacks)
  return (
    <div className='w-1/2 h-3/4 border-cyan-400 '>
      {Text.map((item)=>(
        
            <li key={item.id} className='bg-orange-500 text-white mt-6'>
                {item.text}
            </li>
        
      ))}
    </div>
  )
}

export default Stack
