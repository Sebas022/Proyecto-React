import { Layout } from "../../Components/Layout/layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/context";

export default function Cart(){

    const context = useContext(ShoppingCartContext);

    if (context.cartProducts.length === 0) {
    return (
      <Layout>
        <p className="titulocarrito mt-20 mb-100">No hay productos en el carrito</p>
      </Layout>
    )
  }
    

    return (
        <>
        <Layout>
        <div className="grid grid-cols-1 gap-4 mt-20 mb-100">
        {context.cartProducts.map((item) => (
          <div className="flex gap-4 items-center" key={item.id}>
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[100px]"
              />
            </div>
            <div className="flex  gap-2">
              <p>{item.title}</p>
              <p className="font-bold">${item.price}</p>
              <button
                className="text-red-500 cursor-pointer"
                onClick={() => {
                  // Crear una copia del carrito actual
                  const updatedCart = [...context.cartProducts];
              
                  // Encontrar el índice del primer producto que coincida con item.id
                  const index = updatedCart.findIndex((product) => product.id === item.id);
              
                  // Si el producto existe en el carrito, eliminar solo uno
                  if (index !== -1) {
                    updatedCart.splice(index, 1); // Elimina solo un producto
                    context.setCartProducts(updatedCart); // Actualiza el carrito
                  }
                }}>
                Eliminar
              </button> 
            </div>
          </div>
        ))}
        <p className="font-bold flex justify-end">
          Total: $
          {context.cartProducts
            .reduce((acc, item) => acc + item.price, 0)
            .toFixed(2)}
        </p>
        <div className="flex justify-end">
          <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
        </Layout>
        </>
    );
}