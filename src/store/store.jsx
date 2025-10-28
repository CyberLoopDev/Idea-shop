import { createContext, useState } from "react";

export const CustomContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  const cartCount = cart.reduce((total, item) => total + (item.count || 0), 0); 
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.count || 0), 0); 

  const addToCart = (product) => {
    if (!product || !product.id) return;

    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (product) => {
    if (!product || !product.id) return;

    setFavorites((prev) => {
      const isFavorite = prev.some((item) => item.id === product.id);
      return isFavorite
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  const value = {
    cart,
    favorites,
    cartCount,
    totalPrice, 
    addToCart,
    removeFromCart,
    toggleFavorite,
    isFavorite,
  };

  return (
    <CustomContext.Provider value={value}>
      {children}
    </CustomContext.Provider>
  );
};