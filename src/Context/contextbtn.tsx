import { createContext, useState } from "react";

interface SizeContextProps{
    activeButton: number | null;
    setActiveButton: React.Dispatch<React.SetStateAction<number | null>>;
    sizes: string[];
}

export const SizeContext = createContext<SizeContextProps | null>(null);

interface BtnSizeProviderProps{
    children: React.ReactNode;
}

export const SizeProvider = ({
    children,
}: BtnSizeProviderProps) =>{

    const [activeButton, setActiveButton] = useState<number | null>(null);
    const sizes = ["Small", "Medium", "Large", "X-Large"];

    return(
        <SizeContext.Provider value ={{activeButton, setActiveButton, sizes}}>
            {children}
        </SizeContext.Provider>
    );  
};
