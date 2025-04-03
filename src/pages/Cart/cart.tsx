import { Layout } from "../../Components/Layout/layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/context";
import deleteImage from "../../assets/Delete.png";
import './cart.css';
/*import { SizeContext } from "../../Context/contextbtn";*/



export default function Cart(){

const context = useContext(ShoppingCartContext);
  {/*const context1 = useContext(SizeContext);
    

    const { sizes, activeButton } = context1 as {
      sizes: string[];
      activeButton: number | null;
    };*/}

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
        <h1 className="titulocarrito text-[40px] pt-10">Tu carrito</h1>
        <div className="flex gap-5 mt-10">
        <div className="contenedorcarrito w-200 gap-4 px-10 py-10 mb-100 border border rounded-3xl border-gray-300">
        {context.cartProducts.map((item) => (
          <div className="flex justify-between w-full border-b pb-4 mb-4 items-center border-gray-300" key={item.id}>
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[100px] mx-10 pb-10"
              />
              
            </div>
            <div className="flex flex-col gap-2 flex-1 pl-4">
              <h1 className="titulodetallecarrito flex justify-between">{item.title} <img src={deleteImage} className="cursor-pointer w-fit h-fit" alt="" /></h1> 
              <span className="text-[14px]">Size:{/*{activeButton !== null ? (
        <div>
          <p>Talla seleccionada: {sizes[activeButton]}</p>
        </div>
      ) : (
        <p>No has seleccionado ninguna talla.</p>
      )}*/}</span>
              <span className="text-[14px]">Color: </span>
              <button
                className=""
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
                
              </button> 
              <p className="preciocarrito font-bold text-[24px]">${item.price}</p>
              
            </div>
          </div>
        ))}
      </div>
      <div className="border-gray-300 rounded-3xl border p-4 flex flex-col justify-between w-120 h-[500px]">
        <h1 className="contenedortotalcompra text-[24px] pt-5">Total de compra</h1>
        <div className="flex justify-between px-2">
          <p className="text-gray-500">Subtotal</p>
          <p className="preciocarrito">$565</p>
        </div>
        <div className="flex justify-between px-2">
          <p className="text-gray-500">Descuento (-20%)</p>
          <p className="preciocarrito text-red-500">-$113</p>
        </div>
        <div className="flex justify-between px-2">
          <p className="text-gray-500">Deliver Fee</p>
          <p className="preciocarrito">$15</p>
        </div>
        <div className="flex justify-center">
          <hr className="text-gray-300 w-102"/>
        </div>
        <div className="flex justify-between text-[20px] px-2">
          <p>Total</p>
      <p className="preciocarrito flex justify-end mb-0">
          $
          {context.cartProducts
            .reduce((acc, item) => acc + item.price, 0)
            .toFixed(2)}
        </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white px-30 py-2 rounded-full  cursor-pointer">
            Checkout
          </button>
        </div>
        </div>
        </div>
        </Layout>
        </>
    );
}