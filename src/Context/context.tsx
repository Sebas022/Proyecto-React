import { createContext, SetStateAction, useState } from "react";
import { ProductProps } from "../types/products";


interface UserInfo {
    name: string;
    email: string;
    address: string;
    city: string;
    zipCode: string;
  }

interface ShoppingCartContextProps{
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    cartProducts: ProductProps[];
    setCartProducts: React.Dispatch<SetStateAction<ProductProps[]>>
    userInfo: UserInfo | null;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
    checkoutComplete: boolean;
    setCheckoutComplete: React.Dispatch<React.SetStateAction<boolean>>;
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
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

    return (
        <ShoppingCartContext.Provider value = {{count, setCount, cartProducts, setCartProducts, userInfo,
            setUserInfo,
            checkoutComplete,
            setCheckoutComplete, }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}