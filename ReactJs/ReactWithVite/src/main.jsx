import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Main from './mypage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Main/>
  
  </StrictMode>,
)
