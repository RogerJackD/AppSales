import React, { useState } from 'react'
import { ProductList } from '../components'

import { SearchFilterInput, AddedProductList } from "../components";
export const ProductsPage = () => {

  const [addedproducts, setAddedProducts] = useState([]);

  const handleAddedProducts = (product) =>{
      setAddedProducts([...addedproducts, product])
      console.log(addedproducts)
  }

  return (

    <>
      <div className='text-2xl m-5'>ProductPage</div>

      <SearchFilterInput handleAddedProducts={handleAddedProducts} />

      <AddedProductList addedproducts={addedproducts} />
      

    </>





  )
}
