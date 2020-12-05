import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Error from '../views/Error'
export default function Product() {

  const { id } = useParams()
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false
  })
  let content = null
  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url)
      .then(res => {
        setProduct({
          loading: false,
          data: res.data,
          error: false
        })
      })
      .catch(error => 
        setProduct({
          loading: false,
          data: null,
          error: true
        })
      )
  }, [url])

  if(product.loading){
    content = <Loader/>
  }
  
  if(product.error){
    content = <Error/>
  }

  if(product.data){
    content = 
      <div>
        <h1 className='text-2xl font-bold mb-3' >{product.data.name}</h1>
        <div>
          <img 
            src={product.data.images[0].imageUrl} 
            alt={product.data.name} />
        </div>
        <div>
          $ {product.data.price}
        </div>
        <div>
          {product.data.description}
        </div>
        <div>
          {product.data.createdAt}
        </div>
      </div>
  } 
  return (
    <div>{ content }</div>
  )
}
