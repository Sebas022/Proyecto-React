
import { Link } from "react-router";
import { ProductProps } from "../../types/products";
import '../ProductCard/productcard.css'

export default function ProductCard({id, title,price, image}: ProductProps) {

    return (
      <>
     <div className="flex flex-col items-center w-[250px] p-4 rounded-lg shadow-lg max-h-[300px] border-1 border-black mb-5">
      <div className="w-full h-[200px] rounded-md flex items-center justify-center mb-2">
        <Link to={`/Product/${id}`}><img
          src={image}
          alt={title}
          className="max-h-[120px] max-w-full object-contain rounded-md"
        />
        </Link>
      </div>
      <h3 className="text-gray-700 mb-1 whitespace-nowrap overflow-hidden overflow-ellipsis w-[150px]">{title}</h3>
      <span className="text-lg font-bold text-gray-800">${price}</span>
    </div>
      </>
    );
    
}