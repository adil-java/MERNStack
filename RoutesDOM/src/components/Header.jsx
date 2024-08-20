import React from "react";
import {Link,NavLink} from "react-router-dom";
function Header(){
    return(
        <header className="shadow sticky z-50 top-0">
         <nav className="bg-orange-400 border-gray-200 flex justify-spacebetween items-center ">
         

        <Link to="/Home" className="">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                            />
                    </Link>
                            
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/Home"
                                    className={({isActive}) =>
                                        ` ${isActive ? "text-white" : "text-gray-700"} `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
          <NavLink to="/Github" className={({isActive})=>
        `  ${isActive ? "text-white" : "text-gray-700"} `
        }>GitHub</NavLink>

        <NavLink to={"/contact"} className={({isActive})=>
        `${isActive?"text-white":"text-gray-700"}`} >Contact</NavLink>
                            </ul>
        

    
        
   
        </nav>
        </header>
    )
}
export default Header;