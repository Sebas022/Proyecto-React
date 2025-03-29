import { createContext, SetStateAction, useState } from "react";
import { ProductProps } from "../types/products";


interface ShoppingCartContextProps{
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    cartProducts: ProductProps[];
    setCartProducts: React.Dispatch<SetStateAction<ProductProps[]>>
}

/*Creamos el contexto*/

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
    {} as ShoppingCartContextProps
);

interface ShoppingCartProviderProps{
    children: React.ReactNode;
}

/*Creamos el provider*/

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) =>{
    /*Definimos la info que quiero compartir, elementos del carrito, y la cantidad*/

    const [count, setCount] = useState<number>(0);
    const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);

    return (
        <ShoppingCartContext.Provider value = {{count, setCount, cartProducts, setCartProducts }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}