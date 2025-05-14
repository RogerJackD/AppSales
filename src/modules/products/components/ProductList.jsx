import React from 'react'
import { products } from '../data/products'
export const ProductList = () => {
  return (
    <>

        {JSON.stringify(products,3, null)}


    </>
  )
}
