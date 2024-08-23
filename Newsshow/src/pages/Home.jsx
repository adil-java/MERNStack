import React from 'react'
import { CardThree } from '../components/Card'
import useNews from '../hooks/useNews'
function Home() {
  // let data = useNews('all');
  // let artist=data[0].articles;
  return (
    <div className=' w-screen h-full gap-2 flex flex-wrap bg-slate-900 ... '>
      <CardThree  />
      <CardThree  />
      <CardThree  />
      <CardThree  />
      <CardThree  />
      <CardThree  />
      {/* <CardThree className="w-full aspect-square" /> */}

  




    </div>
  )
}

export default Home
