import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
export default function Navigation() {
  const [show, setShow] = useState(false)

  let menu = ''
  let mask = ''
  show ? menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow" > the menu</div> : menu = ''
  show ? mask = <div className="fixed bg-gray-600 top-0 left-0 w-full h-full z-40 " onClick={() => setShow(false)} > the menu</div> : mask = ''

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon 
          icon={faBars}
          onClick={() => setShow(!show)}
          />
      </span>
      {mask}
      {menu}
    </nav>
  )
}
