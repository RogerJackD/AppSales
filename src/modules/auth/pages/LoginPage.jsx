import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {


  return (
    <>
        <h1>PAGE - LOGIN</h1>
        <button className='bg-blue-500 rounded'>
          <Link to="/products">login</Link>
        </button>
    </>
  )
}
