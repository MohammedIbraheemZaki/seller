import React, {useState} from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(props.num); 
  return (
    <div>
      <p>you clicked me {count} times</p>
      <button onClick={ () => setCount(count + 1)} >Add one</button>
      <button onClick={ () => count === 0 ? setCount(0) : setCount(count -1)} >mines one</button>
    </div>
  )
}
