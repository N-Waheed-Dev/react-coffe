import { useContext } from "react";
import { Link } from "react-router";
import { globalStore } from "../stores/MainStore";

const NewDrink = () => {
  const { newDrink } = useContext(globalStore);

  return (
    <section className="bg-[#fbcfe8] py-12 px-6 my-12 shadow-inner">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-3xl font-serif text-[#a855f7] italic block mb-1">New selection</span>
          <h2 className="text-5xl font-extrabold text-[#4a0e17] uppercase tracking-tight mb-4"> drink </h2>
          <h3 className="text-2xl font-bold text-[#3d2314] mb-2">{newDrink.name}</h3>
          <p className="text-sm text-[#5c3d2e] leading-relaxed mb-6 max-w-lg">  {newDrink.description} </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-extrabold text-[#4a0e17]">{newDrink.price}</span>
            <span className="text-lg text-gray-500 line-through">{newDrink.oldPrice}</span>
          </div>
          <Link to={`/products/single-products/${newDrink.id}`} className="inline-block bg-[#3d2314] hover:bg-[#5c3d2e] text-white px-6 py-2.5 rounded-md font-semibold transition duration-200 shadow-md"> Show Details </Link>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img src={newDrink.image} alt={newDrink.name} className="w-full h-full object-cover hover:scale-105 duration-500"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewDrink;