import React, { useState } from 'react'

import { SearchFilterInput, AddedProductList } from "../components";
export const ProductsPage = () => {

  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddedProducts = (product) =>{
    
    
    const item = {
        ...product,
        cantidad : 1
      }


      setAddedProducts([...addedProducts, item])
      console.log(addedProducts)
  }

  return (

    <>
    <div className='mx-150'>

      <div className='text-2xl m-5'>ProductPage</div>

      <SearchFilterInput handleAddedProducts={handleAddedProducts} />

      <AddedProductList addedProducts={addedProducts} />

      
      

    </div>

    </>





  )
}
