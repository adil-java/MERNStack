import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './conponents/AddTodos'
import Todo from './conponents/Todo'

function App() {

  return (
    <>
    <AddTodos/>
    <Todo/>
    </>
  )
}

export default App
