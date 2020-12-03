import React from 'react'
import Navigation from './Navigation'
export default function Header() {
  return (
    <header className='border-b p-3 flex justify-between items-center' >
      <a className='font-bold' href="/">App Name</a>
      <Navigation/>
    </header>
  )
}
