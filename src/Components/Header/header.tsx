import React from 'react';
import userImage from '../../assets/Frame.png';
import cartImage from '../../assets/Frame1.png';
import headerImage from '../../assets/Rectangle 2.png';
import './header.css'

export default function Header(){
    return (
        <>
        <header className="headershop">
        <nav className="navbar">
        <div className="logo">SHOP.CO</div>
        <ul className="nav-links">
            <li><a href="#">Shop</a></li>
            <li><a href="#">On Sale</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Brands</a></li>
        </ul> 
         <div className="search-bar">
            <input type="search" className='input'  placeholder="Search for products..."/>
            
        </div>
        <div className="icons">
            <span className="cart"><img src={cartImage} alt="" /></span>
            <span className="user"><img src={userImage} alt="" /></span>
        </div>
    </nav>
        <section className="section_container">
            <div className="section_image">
                <div className="section-image">
                    <img src={headerImage} alt="cabecera" />
                </div>

                <h1>Find clothes that matches your style</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <a href="#" className="section_button">Shop Now</a>
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
