import React, { useEffect, useState } from 'react'
import { ShowSubtotal } from './ShowSubtotal'
import { AddedProduct } from './AddedProduct'
import { ShowDetailProductAdded } from './ShowDetailProductAdded'
export const AddedProductList = ({addedProducts}) => {
  
  return (
    <>
        {
          addedProducts?.map((addedProduct)=> 
           <ShowDetailProductAdded key={addedProduct.id_producto} addedProduct={addedProduct}/>
          ) 
        }

        <div>

          <button className='text-white bg-blue-600 rounded px-3 py-2 mt-8'>
          Generar Nota Venta
          </button>

        </div>

    </>
  )
}
