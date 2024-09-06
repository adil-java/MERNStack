import React, {useState} from 'react'
import { addText } from '../features/renderSlice'
import {useDispatch} from 'react-redux'

function Input() {
  const [input, setInput] = useState("");
        const dispatch =  useDispatch()
    const addTextHandler=(e)=>{
        e.preventDefault();
        if(input.trim()){
            dispatch(addText(input))
            setInput("");
        }
    }
  return (
    <div>
    <form onSubmit={addTextHandler} action="">

    <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text"></input>
    <button className='bg-slate-600' type='submit'>Add Stack</button>
    </form>
      
    </div>
  )
}

export default Input
