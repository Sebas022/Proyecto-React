import { useState, useEffect } from "react";

export function useFetch<T>(url: string){
    const[data, setData] = useState<T|null>(null);
    const[error,setError] = useState<Error | null>(null);
    const[isLoading,setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async() =>{
          try {
            const response = await fetch(url);
    
            if(!response.ok){
              throw new Error("Falló la petición de la API")
            }
    
            const data = await response.json();
            setData(data);
          } catch (err) {
            setError(err instanceof Error ? err : new Error("Ocurrió un error"));
          } finally{
            setIsLoading(false);
          }
        }
    
    
        fetchProducts();
      },[url]);

      return{
        data,
        isLoading,
        error
      };
}