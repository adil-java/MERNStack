import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
function Todo() {
  const [checked,setChecked]=useState({})
  const [disable,setdisable]=useState({})

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch({});
 const toggleChecker=(id)=>{
  setChecked((prev)=> ({ ...prev, [id]: !prev[id] }));
  setdisable((prev)=> ({ ...prev, [id]: !prev[id] }));
 }
  // Update handler for updating todo text
  const handleUpdate = (id, currentText) => {
    const newText = prompt("Update the task:", currentText);
    if (newText && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  return (
    <div>
      <h2 className="text-center text-white">All Tasks</h2>
      <ul className="w-full flex flex-col items-center">
        {todos.map((todo) => (
          <div className="w-full flex pt-5 items-center gap-6 justify-center" key={todo.id}>
            <input key={todo.id} type="checkbox"
            checked={checked[todo.id] || false
              
            } 
            onClick={()=>toggleChecker(todo.id)}/>
            <li className={`w-2/4 pl-4 h-12 flex items-center justify-between ${checked[todo.id] ? "bg-green-400 line-through" :" bg-slate-600"}`}>
            {console.log(checked)}
            {/* <li className={`w-2/4 pl-4 h-12 flex items-center justify-between ${checked ? "bg-green-400" : "bg-slate-600"}`}> */}

              {todo.text}
              <div className="flex gap-2 pr-4">
                <button
                disabled={disable[todo.id]}
                  key={todo.id}
                  onClick={() => handleUpdate(todo.id, todo.text)

                  }
                  className="bg-blue-500 text-white px-2 hover:bg-blue-700 no-underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className={`bg-red-500 text-white px-2 hover:bg-red-700 ${checked[todo.id] ? "text-dec" : "" }` }
                >
                  X
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
