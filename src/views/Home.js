import React from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import Error from './Error'
import { useAxiosGet } from '../Hooks/HttpRequests'
export default function Home() {
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
  let products = useAxiosGet(url)
  let content = null

  if(products.loading){
    content = <Loader/>
  }
  
  if(products.error){
    content = <Error/>
  }

  if(products.data){
    content = products.data.map( (product) => ( 
      <div key={product.id} className="flex-no-shrink md:w-1/4 md:px-3 mb-3">
        <ProductCard product={product} />
      </div>
    ))
      
  } 

  return (
    <div>
      <h1 className='font-bold text-2xl mb-3' >Best Sellers</h1>
      {content}

    </div>
  )
}
