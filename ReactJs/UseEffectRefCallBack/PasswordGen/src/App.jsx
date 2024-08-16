import { useCallback, useState,useEffect,useRef } from 'react'
import './App.css'
function App() {
  let [password,setpassword]=useState('');
  let [length,setlength]=useState(0);
  let [isNumber,setNumber]=useState(false);
  let [isChar,setChar]=useState(false);
  let textRef = useRef(null);
  const generator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
    if (isNumber) {
      str += '1234567890';
    }
    if (isChar) {
      str += '@#$%^&}{[]()';
    }
  
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
    setpassword(pass);
  }, [length, isNumber, isChar]);
  
  const copyToClip=()=>{
    textRef.current?.select();
    window.navigator.clipboard.writeText(password)
    
  }
  
  useEffect(()=>{
    generator();
  },[length,isNumber,isChar])
  return (
    <div className='bg-black text-yellow-400 h-screen w-full flex justify-center items-center flex-col'
    >
      <h1 className='text-yellow-400 text-2xl'>Password Generator</h1>
      <div className='w-2/4 gap-7 h-1/3 bg-slate-800 rounded-md pt-10 flex items-center  flex-col'   >
      <div className='w-2/4'>

      <input className='w-2/3' type='text' readOnly ref={textRef} 
      value={password}></input><button className='bg-blue-800 text-white hover:bg-blue-900 ' onClick={copyToClip}>Copy</button>
      </div>
      <div className='w-2/4'>
      <input type="range" 
      min={4}
      value={length}
      
      onChange={(e)=>{
        setlength(Number(e.target.value))
        generator()
      }}
      max={12} /><label>Range value:{length}</label>
      <div>

      <input
      type='checkBox' onChange={()=>{setChar(!isChar)}}
      /><label> Charater </label>
      <input
      type='checkBox' onChange={()=>{setNumber(!isNumber)}}
      
      />
      <label> Numbers </label>
      </div>
      </div>
      </div>
    </div>
    
  )
}

export default App
