import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'


import Github from './options/Github'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './options/Home'
import Contact from './options/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Github" element={<Github />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>

    </Router>
   </div>
  )
}

export default App
