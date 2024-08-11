import React from "react";
import ReactDOM from "react-dom";
import {useState,useEffect} from "react";
import { createRoot } from "react-dom/client";

function Tick() {
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
   </div>
)
}


export default Tick;
