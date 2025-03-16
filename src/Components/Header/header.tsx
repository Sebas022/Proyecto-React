import React from 'react';
import userImage from '../../assets/Frame.png';
import cartImage from '../../assets/Frame1.png';
import headerImage from '../../assets/Rectangle 2.png';

export default function Header(){
    return (
        <>
        <header className="header-shop">
        <nav className="nav-container">
        <div className="nav-links">
                <a href="#" className="nav-link">SHOP.CO</a>
                <a href="#" className="nav-link">Shop</a>
                <a href="#" className="nav-link">On Sale</a>
                <a href="#" className="nav-link">New Arrivals</a>
                <a href="#" className="nav-link">Brands</a>
                <input type="text" placeholder="Search for products..." className="input-search" />
                <img src={userImage} alt="usuario" />
                <img src={cartImage} alt="carrito" />
            </div>
        </nav>
        <section className="section-container">
            <div className="section-image">
                <div className="section-image">
                    <img src={headerImage} alt="cabecera" />
                </div>

                <h1>Find clothes that matches your style</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <a href="#" className="section-button">Shop Now</a>
                <div>
                    <h3>200+</h3>
                    <p>International Brands</p>
                </div>
                <div>
                    <h3>2,000+</h3>
                    <p>High-Quality Products</p>
                </div>
                <div>
                    <h3>30,000+</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
        </section>
        <p className="brand-texts">
            <a href="#" className="brand-text">VERSACE</a> 
            <a href="#" className="brand-text">ZARA</a> 
            <a href="#" className="brand-text">GUCCI</a> 
            <a href="#" className="brand-text">PRADA</a> 
            <a href="#" className="brand-text">Calvin Klein</a> 
         </p>
    </header>
        </>
    );
}
