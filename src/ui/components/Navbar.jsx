import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout= () =>{
    navigate("/login")
  }
  return (
    <>
    
    
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white min-w-full">
        <div>
          <Link to="/products">Ver Productos</Link>
        </div>

        <div>
          <Link to="">Agregar Producto</Link>
        </div>

        <div>
          <Link to="">Historial</Link>
        </div>
        <div>
          <Link to="">Nueva Nota de Venta</Link>
        </div>
        <div>
          <Link to="">Ventas</Link>
        </div>

        <div className="">
          <button onClick={onLogout} className="bg-blue-700 rounded px-4 py-2 ">
            logout
          </button>
        </div>
      </nav>


    </>
  );
};
