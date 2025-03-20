import Header from './Components/Header/header';
import ProductCard from './Components/ProductCard/productCard';
import Footer from './Components/Footer/footer';
import Section from './Components/Section/section';
import closebuttonImage from './assets/Vector.png';
import {useState} from "react";
import { useFetch } from './Hooks/useFetch';
import './App.css';
import { ProductProps } from './types/products';
function App() {

  const[ocultar, setOcultar] = useState<boolean>(false);
 
  const{
    data: products, 
    error, 
    isLoading 
  } = useFetch<ProductProps[]>("https://fakestoreapi.com/products");


  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Ocurrio un error</p>;
  }

  return (
    <>
    
    {!ocultar && (
      <div className="top-bar">
        <p className='textotopbar'>Sign up and get 20% off to your first order. 
        <a href="#">Sign Up Now.</a> 
        <a><img src={closebuttonImage} className='btncerrar' onClick={() => setOcultar(!ocultar)} alt="" />
      {ocultar}
    </a>
      </p>
      </div>
      )}
      <Header/>
    
      <main>
        <section className="max-w-[1110px] mx-auto">
          <h2>New Arrivals</h2>
          <div className="list grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4">
            {products?.map((product)=>(
              <ProductCard 
              key={product.id} {...product}
              />
            ))}
          </div>
          <a href="#">View All</a>
          <hr className="separator1" />
        </section>
        <section className="max-w-[1110px] mx-auto">
          <h2>Top Selling</h2>
          <div className="list grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4">
            {products?.map((product)=>(
              <ProductCard 
              key={product.id} {...product}
              />
            ))}
          </div>
          <a href="#">View All</a>
        </section>
        <Section/>
      </main>
      <Footer />
    </>
  );
}

export default App
