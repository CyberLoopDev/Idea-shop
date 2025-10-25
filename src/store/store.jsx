import { createContext, useState } from "react";

export const CustomContext = createContext();

export const ContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addToCart = (product) => {
        const isProductInCart = cart.some(item => item.id === product.id);
        
        if (!isProductInCart) {
            setCart(prev => [...prev, { ...product, count: 1 }]);
        } else {
            setCart(prev => 
                prev.map(item => 
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                )
            );
        }
    };
    
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const toggleFavorite = (product) => {
        const isProductInFavorites = favorites.some(item => item.id === product.id);
        
        if (isProductInFavorites) {
            setFavorites(prev => prev.filter(item => item.id !== product.id));
        } else {
            setFavorites(prev => [...prev, product]);
        }
    };

    const isFavorite = (id) => {
        return favorites.some(item => item.id === id);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        favorites,
        toggleFavorite,
        isFavorite
    };

    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    );
};