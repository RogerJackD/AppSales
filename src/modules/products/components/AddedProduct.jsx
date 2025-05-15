import { useState } from "react";

export const AddedProduct = ({addedProduct}) => {
    
    return (
    <>
      <div
        className="flex justify-between px-6 border rounded border-gray-300 bg-white shadow-sm my-1 py-2"
        key={addedProduct.id_producto}
      >
        <h2 key={addedProduct.id_producto}>{addedProduct.nombre}</h2>
        {/* <h2>cantidad : {addedProduct.cantidad} </h2> */}
        
        <h2>precio unidad : {addedProduct.precio_unitario}</h2>

      </div>
    </>
  );
};
