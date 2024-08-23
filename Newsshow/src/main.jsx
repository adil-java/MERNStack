import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
const route= createBrowserRouter(
  createRoutesFromElements(
    <Route>

  <Route path='/' element={<Layout/>}>
  <Route path='home' element={<Home/>}></Route>
  </Route>
    </Route>

))
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
