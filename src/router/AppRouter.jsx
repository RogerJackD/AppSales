import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import { LoginPage } from '../modules/auth'
import { ProductsRouter } from '../modules/products'

export const AppRouter = () => {
  return (
    <>  
        

        <Routes>

            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<ProductsRouter />} />

        </Routes>

    
    </>
  )
}
