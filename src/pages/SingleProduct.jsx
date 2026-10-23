import { useContext } from "react";
import { useParams, Link } from "react-router";
import { globalStore } from "../stores/MainStore";
import Footer from "../components/Footer";

const SingleProduct = () => {
  const { productId } = useParams();
  const { products, newDrink } = useContext(globalStore);

 var product = products.find((product) => product.id == productId);
  if (!product && newDrink.id == productId) {
    product = newDrink;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8f5f0] flex flex-col justify-between">
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Product Not Found!</h2>
          <Link to="/products" className="bg-[#3d2314] text-white px-6 py-2 rounded shadow"> Back to Products </Link>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex flex-col justify-between">
      <div className="container mx-auto px-4 py-12">
        <Link  to="/products" className="mb-6 inline-block text-[#7f5539] hover:text-[#3d2314] font-bold duration-200" >  Back to Menu </Link>
            <div className="bg-[#ede0d4] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#ddb892] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-md bg-white">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9c6644] bg-[#e6ccb2] px-3 py-1 rounded">  ID: {product.id}</span>
              <h2 className="text-4xl font-extrabold text-[#3d2314] mt-2">{product.name}</h2>
              <p className="text-sm text-[#7f5539] italic mb-4">{product.subtitle}</p>

              <div className="bg-[#f8f5f0] p-4 rounded-lg mb-4 shadow-inner">
                <h3 className="text-xs font-bold text-[#3d2314] uppercase mb-1">Description:</h3>
                <p className="text-sm text-[#5c3d2e] leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-2 mb-6 text-sm text-[#7f5539]">
                <div className="flex justify-between border-b pb-1">
                  <span>Size:</span>
                  <span className="font-bold text-[#3d2314]">{product.size}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Calories:</span>
                  <span className="font-bold text-[#3d2314]">{product.calories}</span>
                </div>
                {product.ingredients && (
                  <div className="flex justify-between border-b pb-1">
                    <span>Ingredients:</span>
                    <span className="font-bold text-[#3d2314]">{product.ingredients.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#d3b89c]">
              <div>
                <span className="text-xs text-[#7f5539] block">Price</span>
                <span className="text-3xl font-black text-[#3d2314]">{product.price}</span>
              </div>
              <button
                onClick={() => alert(`Successfully ordered ${product.name}!`)}
                className="bg-[#7f5539] hover:bg-[#3d2314] text-white px-6 py-2.5 rounded-lg font-bold shadow duration-200"
              > Order Now </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;