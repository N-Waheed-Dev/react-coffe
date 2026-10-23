import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import Products from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/single-products/:productId" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}