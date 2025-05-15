import React, { useState } from 'react'
import { AddedProduct } from './addedProduct';
import { ShowSubtotal } from './ShowSubtotal';
export const ShowDetailProductAdded = ({addedProduct}) => {

  const [quantity, setQuantity] = useState(addedProduct.cantidad);

  const onInputChange = ({target}) => {
        setQuantity(target.value)
  }

  return (
    <>
      <div key={addedProduct.id_producto}>

            <AddedProduct addedProduct={addedProduct} />
            <input type="number" placeholder='ingrese cantidad...' onChange={onInputChange} value={quantity} className='border border-gray-300 bg-white rounded px-1'/>
             
             <ShowSubtotal cantidad={quantity} precio_unitario={addedProduct.precio_unitario}/>
           </div>

           <hr className='border border-gray-300'/>
    </>
  )
}
