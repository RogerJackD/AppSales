import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPage } from '../pages'
import { Navbar } from '../../../ui'

export const ProductsRouter = () => {
  return (
    <>
        <Navbar/>
        

        <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/*" element={<Navigate to="/products"/>} />


        </Routes>


    </>
  )
}
