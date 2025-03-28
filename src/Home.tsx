import Header from './Components/Header/header';
import ProductCard from './Components/ProductCard/productCard';
import Footer from './Components/Footer/footer';
import Section from './Components/Section/section';
import {useState} from "react";
import { useFetch } from './Hooks/useFetch';
import './Home.css';
import { ProductProps } from './types/products';
import NavBar from './Components/NavBar/navbar';
function App() {

  const [showAllNewArrivals, setShowAllNewArrivals] = useState<boolean>(false);
  const [showAllTopSelling, setShowAllTopSelling] = useState<boolean>(false);


  
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

      <NavBar/>
      <Header/>
    
      <main>
      <section className="max-w-[1110px] mx-auto">
      <h2 id="tituloh2" className="font-bold text-[48px] text-center my-20">New Arrivals</h2>
      <div
        className={`grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4 transition-all duration-500`}
      >
        {products?.slice(0, showAllNewArrivals ? products.length : 4).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center">
          {!showAllNewArrivals && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowAllNewArrivals(true);
              }}
              className="text-[12px] rounded-full border border-gray-300 bg-white text-black px-10 py-2 mt-5 mb-5"
            >
              View All
            </a>
          )}
        </div>
      <div className="flex justify-center">
        <hr className="w-500 text-gray-200 mt-10" />
      </div>
    </section>
    <section className="max-w-[1110px] mx-auto">
      <h2 id="tituloh2" className="font-bold text-[48px] text-center my-20">Top Selling</h2>
      <div
        className={`grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4 transition-all duration-500`}
      >
        {products?.slice(0, showAllTopSelling ? products.length : 4).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center">
          {!showAllTopSelling && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowAllTopSelling(true);
              }}
              className="text-[12px] rounded-full border border-gray-300 bg-white text-black px-10 py-2 mt-5 mb-10"
            >
              View All
            </a>
          )}
        </div>
    </section>

        <Section/>
      </main>
      <Footer />
    </>
  );
};


export default App
