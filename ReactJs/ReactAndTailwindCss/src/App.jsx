import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './components/Card'
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-5">
        Hello world!
      </h1>
      <Card name="CodeWithAdil"/>
      <Card name="ChaiAurCode"/>
    </div>
  )
  
}

export default App
