import React ,{useContext} from 'react'
import { counterContext } from '../context/context'

function Btn() {
    const Counter = useContext(counterContext)
  return (
    <>
    <button>I am Button {Counter}</button>
    </>
  )
}

export default Btn
