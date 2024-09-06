import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/Theme'


function App() {
  const [ThemeMode, setThemeMode] = useState("light")

  const lighttheme = () => {
    setThemeMode("light")
  }

  const darktheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(ThemeMode)
  }, [ThemeMode])
  
  return (
  
    <div className="flex flex-wrap min-h-screen items-center">
  <ThemeProvider value={{ThemeMode,darktheme,lighttheme}}>

                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
  </ThemeProvider>
            </div>

  )
}

export default App
