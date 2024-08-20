import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState ,useEffect } from 'react';
function Home() {
    const [error, setError] = useState(null);
    const [data,setData] = useState({});
    const [user,setUser] = useState("Reactjs")
    const ID = () => {
        fetch(`https://api.github.com/users/${user}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error('User not found');
            }
            return res.json();
          })
          .then((res) => {
            setData(res);
            setError(null); // Clear any previous error
          })
          .catch((err) => {
            setError(err.message);
            setData({}); // Clear data if there's an error
          });
      };
    useEffect(()=>{
    
        ID();  
        },[])
return (

    <div>
        <div className='bg-sky-600 h-[3vw] text-slate-300
        flex justify-center items-center gap-5'>
        <input
        type="text"
        placeholder="Search Github Profile"
        value={user}
        onChange={(e)=>setUser(e.target.value)}
        
        /><button onClick={ID} >Search</button>
          </div>
      {error?
      (<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>{error}</div>
      ):(
       

      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        {(data.avatar_url)&&
        (

            <img src={data.avatar_url} alt="Git picture" width={300} />
        )}

        </div>
)}
    </div>

    
)}  


export default Home

