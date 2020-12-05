import React from 'react'
import { Link } from 'react-router-dom'
export default function NavigationMenu(props) {
  return (
    <div>
      <div className='font-bold mb-1 py-2' >
        <h1 className='font-bold text-2xl'>
          The menu
        </h1>
        </div>
        <ul>
          <li>
            <Link 
              to='/' 
              className='text-blue-500 py-3 border-t border-b block' 
              onClick={props.closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to='/about' 
              className='text-blue-500 py-3 border-b block' 
              onClick={props.closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to='/contact-us' 
              className='text-blue-500 py-3 border-b block' 
              onClick={props.closeMenu}
            >
              Contact us
            </Link>
          </li>
        </ul>
    </div>
  )
}
