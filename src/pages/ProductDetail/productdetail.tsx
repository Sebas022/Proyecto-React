import {useParams}  from "react-router";
import { useFetch } from "../../Hooks/useFetch";
import { ProductProps } from "../../types/products";
import { Layout } from "../../Components/Layout/layout";
import './productdetail.css'
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context/context"


export default function ProductDetailPage(){

  const [activeButton, setActiveButton] = useState<number | null>(null);
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const handleClick = () => {
    if (product && activeButton !== null) {
      const selectedSize = sizes[activeButton];
  
      const productWithSize = {
        ...product,
        size: selectedSize,
      };
  
      context.setCartProducts([...context.cartProducts, productWithSize]);
    } else {
      alert("Por favor selecciona una talla antes de agregar al carrito.");
    }
  };

    const {id} = useParams();
    const context = useContext(ShoppingCartContext);
    console.log(context);

    const {data: product, error, isLoading } = useFetch<ProductProps>(
        `https://fakestoreapi.com/products/${id}`
    );

    
  if (isLoading) {
    return <p  className="titulocarrito text-center text-[50px] my-50">Cargando producto...</p>;
  }

  if (error) {
    return <p>Ocurrio un error</p>;
  }

    return (

        <>
        <Layout>
            
        <div className="detail grid grid-cols-1 md:grid-cols-2 mt-30 mb-100">
            <div className="image max-w-[250px] mx-auto mr-50 mt-5">
            <img className="rounded-3xl border border-black-300 px-5 py-20 shadow-lg" src={product?.image} alt={product?.title} />
            </div>
            <div className="detalle">
        <h1 className="titulocarrito text-[40px] mb-6">{product?.title}</h1>
        <p className="preciodetail text-[32px] font-bold text-black mb-6">${product?.price}</p>
        <p className="text-lg font-bold text-gray-500 text-[16px]">{product?.description}</p>
        <div className="flex justify-center">
          <hr className="w-600 text-gray-300 mt-5"/>
        </div>
        <div className="my-2 text-gray-400">Choose Size</div>
        <div className="flex justify-start gap-10">
      {sizes.map((size, index) => (
        <button
          key={index}
          onClick={() => setActiveButton(index)}
          className={`rounded-full border border-white px-5 py-2 text-gray-500 bg-gray-100 transition-all cursor-pointer 
            ${activeButton === index ? "!bg-black text-white" : ""}`}
        >
          {size}
        </button>
      ))}
    </div>
        
        <div className="flex justify-center">
          <hr className="w-600 text-gray-300 my-5"/>
        </div>
        <div className="flex justify-between mt-6">
        <button style={{cursor: "pointer"}} onClick={handleClick} className="text-[16px] rounded-full border-black text-white bg-black px-25 py-2">Add to cart</button>
        </div>
     </div>
     
    </div>
    
    </Layout>
        </>
    );
    
}