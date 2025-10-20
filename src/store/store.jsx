import { Children, createContext } from "react";



export const CustomContext = createContext()



export const ContextProvider = ({ children}) => {
   

    const value = {
    }

    return <CustomContext.Provider value={value}>
            {children}
    </CustomContext.Provider>

  

}