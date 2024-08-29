import React, { useState } from 'react'

function addTodo() {
    const [todo,setTodo]=useState()
    const [input,setInput]=useState("")

  return (
    <div className='bg-slate-700 w-1/2 h-auto'>
        <form onSubmit={addTodoHandler} >
            <input type='text' className='w-3/4'
            onChange={(e)=>set}
            value={input}/>
        </form>
      
    </div>
  )
}

export default addTodo
