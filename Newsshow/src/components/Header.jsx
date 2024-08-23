import React from 'react'
import {Link,NavLink} from "react-router-dom"
function Header() {
  return (
    <div>
      <header>
        <div className='flex items-center w-full h-[40px] bg-slate-400 text-cyan-200 pl-12'>
          <ul className='flex space-x-4'>
            <li>
              <NavLink className={({isActive})=>(
                isActive ? "text-white"  :"text-slate-600"
  )} to="home">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(
                isActive ? "text-white"  :"text-slate-600"
  )} to="busniess">Busniess</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>(
                isActive ? "text-white"  :"text-slate-600"
  )} to="sport">Sports</NavLink>
            </li>
           
          </ul>
        </div>
      </header>

    </div>
  )
}

export default Header
