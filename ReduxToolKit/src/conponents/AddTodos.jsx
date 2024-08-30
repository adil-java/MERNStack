import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {  // Ensure the input is not empty or just spaces
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    // <div className='bg-slate-700 w-screen flex  justify-center'>
      <form onSubmit={addTodoHandler} className=' w-screen flex  justify-center'>
        <input
        className='w-2/4'
          type='text' 
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='Add task...'
        />
        <button
          type='submit'
          className='bg-sky-400 text-white hover:bg-sky-600 p-2'
        >
          Add Todo
        </button>
      </form>
    // </div>
  );
}

export default AddTodos;
