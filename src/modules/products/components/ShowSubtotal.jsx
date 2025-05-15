import { useState } from "react";
import { useEffect } from "react";

export const ShowSubtotal = ({cantidad, precio_unitario}) => {
  const [subtotalItem, setSubtotalItem] = useState();

 useEffect(() => {
 
  setSubtotalItem(cantidad * precio_unitario)
    
 }, [cantidad])
 


  return(
    <>
        {
        <h2>Subtotal por items : {subtotalItem}</h2>
        }
    </>
  ) 
};
