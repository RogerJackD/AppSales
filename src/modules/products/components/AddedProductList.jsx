import React from 'react'

export const AddedProductList = ({addedproducts}) => {
  return (
    <>
        {
        addedproducts?.map((product)=>

        <div className='flex justify-between px-6 border rounded border-gray-300 shadow-sm my-1 py-2' key={ product.value.id_producto }>
            <h2 key={ product.value.id_producto }>{product.label}</h2>
            <h2>precio unidad : {product.value.precio_unitario}</h2>
        </div>  
          



        )  
      }
    </>
  )
}
