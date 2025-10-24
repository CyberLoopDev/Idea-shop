import axios from "axios";
import { Children, createContext } from "react";



export const CustomContext = createContext()



export const ContextProvider = ({ children}) => {

    const toggleFavorites = (id) => {
        
    }

    const getAllProducts = async(filter) => {
        try{
            const res = await axios('http://localhost:3000/products')
            const data = res.json()
            return data
        } catch(err){
            console.log('Ошибка' + err);
            
        }
    }
   

    const value = {
    }

    return <CustomContext.Provider value={value}>
            {children}
    </CustomContext.Provider>

  

}