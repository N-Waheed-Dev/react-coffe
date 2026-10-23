import { createContext, useState } from "react";
export const globalStore = createContext();
const MainStore = ({ children }) => {
  const [products] = useState([
    {
      id: "espresso",
      name: "Espresso",
      subtitle: "pure strong coffee",
      price: "$5.70",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600",
      description: "Rich and intense espresso made from carefully roasted coffee beans to give you unforgettable energy and flavor.",
      ingredients: ["Concentrated espresso", "Filtered water"],
      calories: "5 kcal",
      size: "Small (60ml)"
    },
    {
      id: "americano",
      name: "Americano",
      subtitle: "espresso + hot water",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=600",
      description: "Classic Americano featuring a balanced blend of strong espresso with hot water for a smooth, enjoyable taste.",
      ingredients: ["Double espresso shot", "Hot water"],
      calories: "15 kcal",
      size: "Medium (350ml)"
    },
    {
      id: "latte",
      name: "Latte",
      subtitle: "espresso + lots of milk + little foam",
      price: "$4.30",
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600",
      description: "A smooth blend of rich espresso and fresh steamed milk with a light layer of creamy foam.",
      ingredients: ["Espresso", "Fresh steamed milk", "Milk foam"],
      calories: "190 kcal",
      size: "Large (450ml)"
    },
    {
      id: "macchiato",
      name: "Macchiato",
      subtitle: "espresso + small milk foam",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600",
      description: "Concentrated espresso marked with a delicate touch of warm milk foam to enhance texture and flavor.",
      ingredients: ["Concentrated espresso", "Touch of milk foam"],
      calories: "35 kcal",
      size: "Small (120ml)"
    },
    {
      id: "irish-coffee",
      name: "Irish Coffee",
      subtitle: "coffee + whiskey + cream",
      price: "$5.40",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
      description: "A signature drink combining rich hot coffee with luxurious whipped cream flavor.",
      ingredients: ["Rich black coffee", "Special flavor", "Fresh whipped cream"],
      calories: "210 kcal",
      size: "Medium (300ml)"
    },
    {
      id: "flat-white",
      name: "Flat White",
      subtitle: "espresso + thin layer of milk foam",
      price: "$4.20",
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600",
      description: "Popular Australian flat white blending strong espresso with rich micro-foam milk.",
      ingredients: ["Double ristretto", "Smooth micro-foam milk"],
      calories: "120 kcal",
      size: "Medium (240ml)"
    }
  ]);

  const newDrink = {
    id: "iced-latte",
    name: "Iced Latte",
    oldPrice: "$7.80",
    price: "$6.50",
    subtitle: "New Selection",
    description: "A refreshing coffee drink made with espresso, cold milk, and ice. It has a smooth, light flavor, balancing the strength of espresso with the creaminess of milk. Perfect for hot days or when you want a cool, energizing coffee without being too strong.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Fresh espresso", "Cold milk", "Ice cubes", "Touch of syrup"],
    calories: "140 kcal",
    size: "Large (500ml)"
  };

  const value = {
    products,
    newDrink
  };

  return <globalStore.Provider value={value}>
    {children}
    </globalStore.Provider>;
};

export default MainStore;