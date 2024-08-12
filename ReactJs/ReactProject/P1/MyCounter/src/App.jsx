import React from "react";
import ReactDOM from "react-dom";
import {useState,useEffect} from "react";
import { createRoot } from "react-dom/client";
function Tick() {
  
  const [counter,setCounter]=useState(0)
  function inc(){
    setCounter(counter+1)
    // setCounter(counter+1) // In fiber algo it create batches of changes to all the setCounter() is treated as one to fullfill this condition we can use the below way
    // setCounter(pervCounter=>pervCounter+1)// on the increase button incr counter twice 

  }
  function dec(){
    setCounter(counter-1)
  }
  let [time,setTime]= useState(new Date().toLocaleTimeString())    
  useEffect(()=>{
    let timer= setInterval(()=>{
      setTime(new Date().toLocaleTimeString())},1000);

      return()=>clearInterval(timer)
  },[]);
  
return(

  <div>
     <h1>Hello, world!</h1>
     <h2>It is {time}.</h2>
     <h1>The counter is:{counter}</h1>
     <button onClick={dec}>decrease</button>
     <button onClick={inc}>inrease</button>

   </div>
)
}


export default Tick;
