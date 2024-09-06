import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider,themeContext } from './context'
import Button from './components/Button'

function App() {

  const [ThemeMode, setTheme] = useState("light")
  const DarkTheme=()=>{
    setTheme("dark")
  }
  const LightTheme=()=>{
    setTheme("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(ThemeMode)
  }, [ThemeMode])
  

  return (
    <ThemeProvider value={{ThemeMode,DarkTheme,LightTheme}}>
      <Button/>
    </ThemeProvider>
  )
}

export default App
