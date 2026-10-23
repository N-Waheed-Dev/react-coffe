
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#ede0d4] rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between border border-[#ddb892]">
      <div>
        <div className="w-full h-44 rounded-md overflow-hidden bg-white mb-3 shadow-inner">
          <img  src={product.image}  alt={product.name}  className="w-full h-full object-cover hover:scale-105 transition duration-300" />
        </div>
        <h3 className="text-lg font-bold text-[#3d2314]">{product.name}</h3>
        <p className="text-xs text-[#7f5539] mb-3 capitalize line-clamp-1">{product.subtitle}</p>
      </div>
      
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#d3b89c]">
        <span className="text-base font-extrabold text-[#3d2314]"> ${product.price.toFixed(2)}</span>
        <button  onClick={() => navigate(`/product/${product.id}`)} className="bg-[#b08968] hover:bg-[#7f5539] text-white text-xs px-4 py-1.5 rounded font-medium shadow transition duration-200" > Show </button>
      </div>
    </div>
  );
}