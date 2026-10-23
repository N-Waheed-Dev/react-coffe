import HeroBanner from "../components/HeroBanner";
import Products from "./Product";
import NewDrink from "../components/NewDrink";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f0] flex flex-col justify-between">
      <div>
        <HeroBanner />
        <Products />
        <NewDrink />
      </div>
      <Footer />
    </div>
  );
};

export default Home;