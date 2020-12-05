import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'
export default function Navigation() {
  const [show, setShow] = useState(false)
  const maskTransitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
  const menuTransitions = useTransition(show, null, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
  // let menu = ''
  // let mask = ''
  // show ? menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow" > the menu</div> : menu = ''
  // show ? mask = <div className="fixed bg-gray-600 top-0 left-0 w-full h-full z-40 " onClick={() => setShow(false)} > the menu</div> : mask = ''

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon
          className='gray-400' 
          icon={faBars}
          onClick={() => setShow(!show)}
          />
      </span>
      {
        maskTransitions.map(({ item, key, props }) =>
        item && 
          <animated.div 
            key={key} 
            style={props}
            className="fixed bg-gray-50 top-0 left-0 w-full h-full "
            onClick={() => setShow(false)}
          >
          </animated.div>
        )
      }
      {
        menuTransitions.map(({ item, key, props }) =>
        item && 
          <animated.div 
            key={key} 
            style={props}
            className="fixed bg-white top-0 left-0 w-4/5 h-full shadow p-5"
            >
              <NavigationMenu closeMenu={() => setShow(false)}/>
          </animated.div>
        )
      }
      
    </nav>
  )
}
