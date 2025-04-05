import { Layout } from "../../Components/Layout/layout";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context/context";
import deleteImage from "../../assets/Delete.png";
import CheckoutFormRHF from "../../Components/CheckoutFormRHF/checkoutformrhf";
import './cart.css';
import { Link } from "react-router";

interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

export default function Cart() {
  const context = useContext(ShoppingCartContext);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (context.cartProducts.length === 0) {
    return (
      <Layout>
        <p className="titulocarrito mt-20 mb-100">No hay productos en el carrito</p>
      </Layout>
    );
  }

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleFormSubmit = (formData: FormData) => {
    context.setUserInfo(formData);
    context.setCheckoutComplete(true);
    // Here you would typically send the order to a backend
    alert("¡Pedido completado con éxito!");
  };

  if (context.checkoutComplete) {
    return (
      <Layout>
        <div className="text-center py-8 m-5">
          <h2 className="text-2xl font-bold mb-4">¡Gracias por tu compra!</h2>
          <p>Tu pedido ha sido procesado correctamente.</p>
          <p className="mt-2 mb-5">
            Te enviaremos un correo a {context.userInfo?.email} con los
            detalles.
          </p>
          <Link className="mt-4 bg-black text-white px-4 py-2 rounded-full" to="/Home"> Volver a la tienda
          <button
            className=""
            onClick={() => {
              context.setCartProducts([]);
              context.setUserInfo(null);
              context.setCheckoutComplete(false);
            }}
          >
          </button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <h1 className="titulocarrito text-[40px] pt-10">Tu carrito</h1>
        <div className="flex gap-5 mt-10">
          <div className="contenedorcarrito w-200 gap-4 px-10 py-10 mb-100 border border rounded-3xl border-gray-300">
            {context.cartProducts.map((item) => (
              <div
                className="flex justify-between w-full border-b pb-4 mb-4 items-center border-gray-300"
                key={item.id}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-[100px] mx-10 pb-10"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1 pl-4">
                  <h1 className="titulodetallecarrito flex justify-between">
                    {item.title}
                    <img
                      src={deleteImage}
                      className="cursor-pointer w-fit h-fit"
                      alt="" onClick={() => {
                        const updatedCart = [...context.cartProducts];
                        const index = updatedCart.findIndex(
                          (product) => product.id === item.id
                        );
                        if (index !== -1) {
                          updatedCart.splice(index, 1);
                          context.setCartProducts(updatedCart);
                        }
                      }}
                    />
                  </h1>
                  <span className="text-[14px]">Size: {item.size}</span>
                  <span className="text-[14px]">Color: </span>
           
                  <p className="preciocarrito font-bold text-[24px]">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-gray-300 rounded-3xl border p-4 flex flex-col justify-between w-120 h-[650px]">
            
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
        <div className="flex justify-center py-5">
          <hr className="text-gray-300 w-102"/>
        </div>
            <div className="flex justify-between px-2">
              <p>Total:</p>
              <p className="preciocarrito font-bold flex">
          $
          {context.cartProducts
            .reduce((acc, item) => acc + item.price, 0)
            .toFixed(2)}
        </p>

        {showCheckoutForm ? (
          <CheckoutFormRHF onSubmit={handleFormSubmit} />
        ) : ( 
          <div className="flex justify-end ">
            <button
              className="bg-black text-white px-4 py-2 rounded-full cursor-pointer"
              onClick={handleCheckout}
            >
              Proceder al checkout
            </button>
          </div>
        )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}