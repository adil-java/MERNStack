import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function AddTodos() {
    // const [todo,setTodo]=useState()
    const [input,setInput]=useState("")
    const dispatch = useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div className='bg-slate-700 w-1/2 h-auto'>
        <form onSubmit={addTodoHandler} >
            <input type='text' className='w-3/4 space-x-3'
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            placeholder='Add task...'/>
            <button type='submit'className='bg-sky-400 text-white hover:bg-sky-600' t>Add Todo</button>
        </form>
      
    </div>
  )
}

export default AddTodos
