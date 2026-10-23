import { useContext } from "react";
import { Link } from "react-router";
import { globalStore } from "../stores/MainStore";

const Products = () => {
  const { products } = useContext(globalStore);

  return (
    <div className="py-10 bg-[#f8f5f0]">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-left">
          <h1 className="text-4xl font-extrabold text-[#3d2314] font-serif">Menu</h1>
          <p className="text-lg font-serif italic text-[#7f5539]">drinks</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map(({ id, name, subtitle, price, image }) => (
            <div key={id} className="bg-[#ede0d4] rounded-xl p-4 flex flex-col justify-between shadow-lg border border-[#ddb892]" >
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden bg-white mb-4 shadow-inner">
                  <img src={image} alt={name}className="w-full h-full object-cover hover:scale-105 duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#3d2314]">{name}</h3>
                <p className="text-xs text-[#7f5539] mb-4 capitalize">{subtitle}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#d3b89c]">
                <span className="text-lg font-extrabold text-[#3d2314]">{price}</span>
                <Link to={`/products/single-products/${id}`} className="bg-[#b08968] hover:bg-[#7f5539] text-white text-sm px-5 py-2 rounded-lg font-medium shadow duration-200">  Show </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;