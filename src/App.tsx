//import Button from './Button';
import './App.css'
import ProductCard from './Components/ProductCard/productCard';
//import { useEffect, useState } from 'react';

function App() {
  /*
  
  const [contador, setContador] = useState<number>(0);
      
  const handleClickFirst = () =>{
    console.log(1);
  };
  const handleClickSecond= () =>{
    console.log(2);
  };
  const handleClickThird = () =>{
    console.log(3);
  };

  useEffect (() => {
    console.log("El componente ha cargado");
  },[]);

  useEffect (() => {
    console.log("El componente se ha actualizado");
    return () =>{
      console.log("El componente se va a desmontar");
      };
  },[contador]);

  return (

    <>
      <p>Haz hecho click {contador} veces</p>
      <button onClick={() => setContador(contador+1)}>Incrementar</button>

    <section>
        <h1>Lista de botones</h1>
        <Button label="Boton 1" handleClick={handleClickFirst}/>
        <Button handleClick={handleClickSecond}/>
        <Button label="Boton 3" handleClick={handleClickThird}/>
    </section>
    </>
  );
*/

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
        </section>
      </main>
    </>
  );
}

export default App
