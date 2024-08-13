import { StrictMode, useState,useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
function Dates(){
  let [date,setdat]=useState(new Date().toLocaleTimeString());
  useEffect(()=>{

    const intervalId = setInterval(() => {
      setdat(new Date().toLocaleTimeString());
    }, 1000);
    console.log(date)
    return () => clearInterval(intervalId);
  }, []);
  return(<h1>{date}</h1>

  )}
function ReactComp(){
  let [color,setColor]=useState("black")
  useEffect(() => {
    // Safely select the element after it has been rendered
    const select = document.querySelector(".main");
    select.addEventListener("click", (e) => {
     

        setColor(e.target.innerHTML);
        console.log(e.target.innerHTML) 
      
    });
    console.log(select); 

  }, []);
  // Mapping color names to Tailwind CSS classes
  return(

    <div className={`h-screen bg-${color}-400 `}>
      <App  />
    </div>
  );
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ReactComp/>

  <Dates />
</StrictMode>
);
