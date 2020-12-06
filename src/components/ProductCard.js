import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        <h1 className='text-2xl font-bold mb-3' >{props.product.name}</h1>
      </Link>
      <div>
        <img 
          src={props.product.images[0].imageUrl} 
          alt={props.product.name} />
      </div>
      <div>
        $ {props.product.price}
      </div>
      <div>
        {props.product.description}
      </div>
      <div>
        {props.product.createdAt}
      </div>
      <Link to={`/products/${props.product.id}`} className='bg-blue-500 text-white p-2 flex justify-center mt-2 mb-3'>
        View
      </Link>
    </div>
  )
}
