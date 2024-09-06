import React from 'react'
// import  Themer  from '../context'
import useThemer from '../context';

function Button() {
    const {ThemeMode,DarkTheme,LightTheme}=useThemer();
    const setter=(e)=>{
        const get = e.target.checked;
        get?DarkTheme():LightTheme()
    }
  return (
    <div>
            <button onClick={setter}>
                Current Theme is : {ThemeMode}
            </button>
            <input type="checkbox" onChange={setter} />
        </div>
  )
}

export default Button

