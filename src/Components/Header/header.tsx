import React from 'react';
import versaceImage from '../../assets/Versace.png';
import zaraImage from '../../assets/Zara.png';
import gucciImage from '../../assets/Gucci.png';
import pradaImage from '../../assets/Prada.png';
import calvinkleinImage from '../../assets/CalvinKlein.png';
import '../Header/header.css';

export default function Header(){
    return (
        <>
        <header className="headershop">
      

    <section id='sectionbg' className="flex items-center bg-gray-100">
  <div className="container mx-5 flex items-center">  
    {/* Contenedor de la parte izquierda */}
    <div className="w-full lg:w-1/2 text-left pl-10 lg:pl-20">
      {/* Título */}
      <h1 id='titulosection' className="text-4xl lg:text-6xl font-extrabold leading-tight text-left">
        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
      </h1>
      
      {/* Párrafo */}
      <p className="text-gray-600 max-w mt-4 leading-relaxed">
        Browse through our diverse range of meticulously crafted garments, 
        designed to bring out your individuality and cater to your sense of style.
      </p>

      {/* Botón */}
      <a href="#" 
         className="inline-block mt-6 bg-black text-white px-15 py-3 rounded-full text-[15px] font-semibold">
        Shop Now
      </a>

      {/* Estadísticas */}
      <div className="flex gap-5 mt-10">
        <div>
          <h3 className="tituloh3 text-3xl text-black">200+</h3>
          <p className="text-gray-500 text-sm">International Brands</p>
        </div>
        <div className="w-px h-14 bg-gray-300 mx-4"></div>
        <div>
          <h3 className="tituloh3 text-3xl font-bold text-black">2,000+</h3>
          <p className="text-gray-500 text-sm">High-Quality Products</p>
        </div>
        <div className="w-px h-14 bg-gray-300 mx-4"></div>
        <div>
          <h3 className="tituloh3 text-3xl font-bold text-black">30,000+</h3>
          <p className="text-gray-500 text-sm">Happy Customers</p>
        </div>
      </div>
    </div>
  </div>
</section>

        <div className="flex justify-evenly items-center bg-black py-8">
             <a href="#"><img id='marcas' src={versaceImage} alt="VERSACE" className="h-7" /></a> 
             <a href="#"><img id='marcas' src={zaraImage} alt="GUCCI" className="h-7" /></a>
             <a href="#"><img id='marcas' src={gucciImage} alt="ZARA" className="h-7" /></a>
             <a href="#"><img id='marcas' src={pradaImage} alt="PRADA" className="h-7" /></a>
             <a href="#"><img id='marcas' src={calvinkleinImage} alt="Calvin Klein" className="h-7" /></a>
        </div>
    </header>
        </>
    );
}
