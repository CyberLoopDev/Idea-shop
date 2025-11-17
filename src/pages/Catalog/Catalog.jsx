import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CustomContext } from '../../store/store'; 

import Filter from "./Filter/Filter";
import FilteredProducts from "./FilteredProducts/FilteredProducts";


const Catalog = () => {
    
    const { categorySlug } = useParams(); 
    
    
    const { setFilter } = useContext(CustomContext); 
    
    useEffect(() => {
      
        if (categorySlug) {
           
            setFilter(prev => ({
                ...prev,
                category: categorySlug 
            }));
        } else {
           
             setFilter(prev => {
                const { category, ...rest } = prev; 
                return rest; 
            });
        }
    
    }, [categorySlug, setFilter]); 

    return (
        <main style={{ minWidth: '1000px'}}>
            <Filter />
            <FilteredProducts />
        </main>
    );
};

export default Catalog;