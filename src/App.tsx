import './App.css'
import Header from './Components/Header/header';
import ProductCard from './Components/ProductCard/productCard';
import Footer from './Footer/footer';
import Section from './Section/section';
import closebuttonImage from './assets/Vector.png'
import './App.css'

function App() {

  const ocultar () =>{

  }
 
const products = [
  {
    id: 0,
    name: "Producto 01",
    price: 240,
  },
  {
    id: 1,
    name: "Producto 02",
    price: 200,
  },
  {
    id: 2,
    name: "Producto 03",
    price: 140,
  },
  {
    id: 3,
    name: "Producto 04",
    price: 190,
  },
];

  return (
    <>
    <div className="top-bar">
        <p>Sign up and get 20% off to your first order. 
          <a href="#">Sign Up Now.</a> 
          <a href="#" className="botoncerrar"><img src={closebuttonImage} alt="" /></a>
        </p>
    </div>
    <Header/>
      <main>
        <section className='new-arrivals'>
          <h2>New Arrivals</h2>
          <div className='list'>
            {products.map((product)=>(
              <ProductCard 
              key={product.id} {...product}
              />
            ))}
          </div>
          <a href="#">View All</a>
          <hr className="separator1" />
        </section>
        <section className='top-selling'>
          <h2>Top Selling</h2>
          <div className='list'>
            {products.map((product)=>(
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
