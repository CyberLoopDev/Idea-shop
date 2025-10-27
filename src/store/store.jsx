import axios from "axios";
import { createContext, useState } from "react";

export const CustomContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState({
    color: null,
    category: null,
    price: null, 
    minPrice: null,
    maxPrice: null,
    country: null, 
    country_of_origin: null,
    minWeight: null,
    maxWeight: null,
    minRating: null,
    maxRating: null,
    sort: null, 
    material: null,
    tags: []
  });

 
 const getAllProducts = async (filter, page = 1, limit = 10) => {
  try {
    const params = {};

    if (filter.category) params.category = filter.category;
    if (filter.color) params.color = filter.color;
    if (filter.material) params.material = filter.material;
    if (filter.country_of_origin) params.country_of_origin = filter.country_of_origin;

  
    if (filter.price === "До 1000 ₽") params.maxPrice = 1000;
    if (filter.price === "1000-5000 ₽") {
      params.minPrice = 1000;
      params.maxPrice = 5000;
    }
    if (filter.price === "От 5000 ₽") params.minPrice = 5000;

    if (filter.minWeight) params.minWeight = filter.minWeight;
    if (filter.maxWeight) params.maxWeight = filter.maxWeight;
    if (filter.minRating) params.minRating = filter.minRating;
    if (filter.maxRating) params.maxRating = filter.maxRating;
    if (filter.tags?.length) params.tags = filter.tags.join(',');

    if (filter.sort) {
      const sortMap = {
        "По умолчанию": "",
        "Сначала дешевле": "price-asc",
        "Сначала дороже": "price-desc"
      };
      params.sort = sortMap[filter.sort];
    }

   
    params.page = page;
    params.limit = limit;

    const query = new URLSearchParams(params).toString();
    const res = await fetch(`http://localhost:3000/products?${query}`);
    if (!res.ok) throw new Error("Ошибка запроса");
    return await res.json();
  } catch (err) {
    console.error("Ошибка при получении продуктов:", err);
  }
};



  const addToCart = (product) => {
    if (!product || !product.id) return;
    setCart((prev) => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, count: (p.count||1) + 1 } : p);
      }
      return [...prev, { ...product, count: 1 }];
    });
    setCartCount(c => c + 1);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const toggleFavorite = (product) => {
    if (!product || !product.id) return;
    setFavorites(prev => prev.some(p => p.id === product.id) ? prev.filter(p => p.id !== product.id) : [...prev, product]);
  };

  const isFavorite = (id) => favorites.some(p => p.id === id);

  const value = { filter, setFilter, getAllProducts, cart, favorites, cartCount, addToCart, removeFromCart, toggleFavorite, isFavorite };

  return <CustomContext.Provider value={value}>{children}</CustomContext.Provider>;
};
