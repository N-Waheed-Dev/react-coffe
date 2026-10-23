const HeroBanner = () => {
  return (
    <div className="bg-[#d8c3a5] py-16 px-4 text-center shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#ffffff] uppercase tracking-wider drop-shadow-md mb-2"> ORDER <span className="text-[#3d2314]">COFFEE</span></h1>
        <p className="text-2xl font-serif italic text-[#6f4e37] mb-6"> Welcome </p>
        <div className="w-full max-w-md h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1000"  alt="Coffee Banner"  className="w-full h-full object-cover transform hover:scale-105 duration-500"/>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;