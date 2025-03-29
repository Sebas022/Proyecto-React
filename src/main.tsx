import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Home from './pages/Home/Home.tsx'
import ProductDetailPage from './pages/ProductDetail/productdetail.tsx';
import Cart from './pages/Cart/cart.tsx';
import { ShoppingCartProvider } from './Context/context.tsx';

createRoot(document.getElementById('root')!).render(
  <ShoppingCartProvider>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />}></Route>
          {/*para hacer una ruta dinamica, ponerle un parametro en este caso :id*/}
         <Route path="/Product/:id" element={<ProductDetailPage/>}></Route>
         <Route path="/Home" element={<Home/>}></Route>
         <Route path="/Cart" element={<Cart/>}></Route>
       </Routes>
     </BrowserRouter>
  </ShoppingCartProvider>
  
)
