import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {App, App2 } from './App.jsx'
import Main from './mypage.jsx'
const ReactHai=React.createElement('a',{
  href:"http://google.com",
  target :"_blank"
},"Direct towards Google")

createRoot(document.getElementById('root')).render(// react create it own DOM and then compare it with the Page Dom, and merges the change part only.
    <div>

    <App/>
    <App2/>
    
  {ReactHai}
    </div>
  
)
