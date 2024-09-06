import React from 'react'
import { CardThree } from '../components/Card'

function Sports() {
 // let data = useNews('all');
  // let artist=data[0].articles.splice(0,10);
  let artist=[1,2,3,4,5,6]
  return (

    <div className='w-screen h-full gap-3 flex flex-wrap bg-slate-900 items-center justify-center sm:flex sm:justify-center '>
      { artist.map((value,index)=>(
        <CardThree key={index}/>
      ))}
      {/* <CardThree   />
      <CardThree  />
      <CardThree  />
      <CardThree  />
      <CardThree  />
      <CardThree  /> */}
      {/* <CardThree className="w-full aspect-square" /> */}

  




    </div>
  )
}
export default Sports
