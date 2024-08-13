import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Color from './components/color'



function App() {

  return (
    <div className=' main max-w-screen-sm h-14 flex items-center justify-stretch border-2 rounded-xl bg-slate-500 '>
     
      <Color color="sky"/>
      <Color color="red" />
      <Color color="yellow" />
      <Color color="green" />
      <Color color="slate" />


<h2 className=""></h2>

    </div>
  )
  
}

export default App
