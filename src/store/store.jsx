import { Children, createContext } from "react";



export const CustomContext = createContext();

export const ContextProvider = ({ children}) => {
   

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