import React  from 'react';

import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setcounter]=useState(0);
  const inc=()=>{
    if(counter<20){

      setcounter(++counter);
      
      console.log(counter);
    }
  }
  const dec=()=>{
    if(counter>0){

      setcounter(counter-1);
      
      console.log(counter);
    }
  
  }
  return (
    <>
     <h1>Code With Adil</h1>
     <h2 >Counter Value:{counter}</h2>
     <button 
     onClick={inc}>increase</button>
     <button onClick={dec}>Decrese</button>
    </>
  )
}

export default App
