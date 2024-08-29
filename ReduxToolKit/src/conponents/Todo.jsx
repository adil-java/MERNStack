import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
 const todos= useSelector(state=>state.todos
  )
  const dispatch=useDispatch()
  return (
    <>
    <div>
      All Task Here  
    {todos.map((todo)=>(
      <li id={todo.id}>{todo.text}
      <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
      </li>
    )
    )}
    </div>
    </>
  )
}

export default Todo
