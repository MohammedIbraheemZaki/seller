import React from 'react'
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div>
      <h1 className='font-bold text-2xl' >Home page</h1>
      <Counter num={5}/>
    </div>
  )
}
