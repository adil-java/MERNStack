import React, { useState } from 'react'
import { ColorProvider } from '../ccontext/sendColor';
import Parent from './Parent';

function Child() {
    const [colors,SetColor]=useState("");
    // const createContext={
    //     color:colors,
    //     setColor:SetColor
    // }
  return (
    <ColorProvider value={{color:colors,setColor:SetColor}}>
    <div>
        <input type='text' onChange={(e)=>SetColor(e.target.value)
        }
        // value={colors}
        />  
        <Parent/>
    </div>
    </ColorProvider>
  )
}

export default Child
