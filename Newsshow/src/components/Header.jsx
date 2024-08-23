import React from 'react'
import {Link,NavLink} from "react-router-dom"
function Header() {
  return (
    <div>
      <header>
        <div className='flex items-center w-full h-[234px] bg-slate-400'>
          <ul className='flex space-x-4'>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              {/* <Link to="/">About</Link> */}
            </li>
            <li>
              {/* <Link to="/contact">Contact</Link> */}
            </li>
          </ul>
        </div>
      </header>

    </div>
  )
}

export default Header
