import React from 'react'

export default function Header() {
  return (
    <header className='border-b font-bold p-3' >
      <a className='app-link' href="/">App Name</a>
      <nav>
        <a className='app-link' href="/">Home</a>
      </nav>
    </header>
  )
}
