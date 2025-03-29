import React, { useState } from 'react';
import userImage from '../../assets/Frame.png';
import cartImage from '../../assets/Frame1.png';
import { Link } from 'react-router';
import closebuttonImage from '../../assets/Vector.png';
import './navbar.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/context';


export default function Header(){
  const context = useContext(ShoppingCartContext);

    const[ocultar, setOcultar] = useState<boolean>(false);
 
    return (
        <>
        {!ocultar && (
              <div className="top-bar">
                <p className='textotopbar'>Sign up and get 20% off to your first order.  
                <a href="#" className='underline underline-offset-4'>Sign Up Now.</a> 
                <a><img src={closebuttonImage} className='btncerrar' onClick={() => setOcultar(!ocultar)} alt="" />
              {ocultar}
                </a>
                </p>
                </div>
              )}
        <nav className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
  {/* Logo */}
  <Link to="/Home" className="textolinknavbar text-[32px] font-bold pl-10 mb-2">SHOP.CO</Link>

  {/* Navegación */}
  <ul className="flex space-x-6">
    <li><a href="#" className="{hover:text-gray-500}">Shop</a></li>
    <li><a href="#" className="{hover:text-gray-500}">On Sale</a></li>
    <li><a href="#" className="{hover:text-gray-500}">New Arrivals</a></li>
    <li><a href="#" className="{hover:text-gray-500}">Brands</a></li>
  </ul>

  {/* Barra de búsqueda */}
  <div className="flex-1 max-w-md mx-5">
    <input 
      type="search" 
      className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-300 text-gray-600 placeholder-gray-500"
      placeholder="Search for products..."
    />
  </div>

  {/* Iconos */}
  <div className="flex items-center space-x-6 relative pr-25">
    {/* Carrito */}
    <Link to="/Cart" className="relative">
      <span className="cart">
        <img src={cartImage} alt="Cart" />
      </span>
      <span className="absolute -top-2 -right-3 bg-red-400 text-white text-xs px-2 rounded-full">
        {context.cartProducts.length}
      </span>
    </Link>

    {/* Usuario */}
    <Link to="/user">
      <span className="user">
        <img src={userImage} alt="User" />
      </span>
    </Link>
  </div>
</nav>
        </>
    );
}
