import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import config from './config/config'
import config from './config/config'
function App() {

  const [count, setCount] = useState(0)
  console.log(config)
  // if React App the We access .env as:
  // process.env.REACT_APP_ANYNAME
  return (
    <>
      <h1>Blogger With appwrite</h1>
    </>
  )
}

export default App
