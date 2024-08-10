import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Main from './mypage.jsx'

createRoot(document.getElementById('root')).render(// react create it own DOM and then compare it with the Page Dom, and merges the change part only.
  <StrictMode>
    <App />
    <Main/>
  
  </StrictMode>,
)
