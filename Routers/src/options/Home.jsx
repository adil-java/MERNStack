import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState ,useEffect } from 'react';
function Home() {
    const [data,setData] = useState({});
    const ID=()=>
        {
            fetch('https://api.github.com/users/adil-java')
            .then((res)=>res.json())
            .then((res)=>setData(res))
        }
    useEffect(()=>{
    
        ID();  
        },[])
    // const data = useLoaderData();
return (
    <div>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </div>
  )
}

export default Home
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
