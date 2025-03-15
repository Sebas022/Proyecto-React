import Button from './Button';
import './App.css'
import { useState } from 'react';

function App() {

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
}

export default App
