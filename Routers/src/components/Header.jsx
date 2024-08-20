import React from 'react'
import {Link , NavLink} from "react-router-dom"
// import { IconName } from "react-icons/im";
function Header() {
  return (
    <div>
        <div>
        <img src="" alt="" />
        </div>
        <ul className='flex gap-9 bg-slate-700 h-14 items-center justify-center'>
            <NavLink className={({isActive})=>`
             ${isActive ? "text-orange-700" : "text-yellow-800 font-semibold"}`} to={"/home"}>Home</NavLink>
            <NavLink 
            className={({isActive})=>`${isActive ? "text-orange-700" : "text-yellow-800 font-semibold"}`} to={"/contact"}>Contact</NavLink>
            <NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "text-yellow-800 font-semibold" }`} to={"/about"}>About</NavLink>
        </ul>
    </div>
  )
}

export default Header
