import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CustomContext } from '../../store/store'; // Убедитесь, что путь к контексту правильный

import Filter from "./Filter/Filter";
import FilteredProducts from "./FilteredProducts/FilteredProducts";


const Catalog = () => {
    // 1. Получаем динамический параметр из URL
    const { categorySlug } = useParams(); 
    
    // 2. Получаем функцию установки фильтра из контекста
    const { setFilter } = useContext(CustomContext); 
    
    useEffect(() => {
        // Этот эффект срабатывает при первом рендере и при смене categorySlug в URL
        if (categorySlug) {
            // Если slug существует, устанавливаем фильтр 'category' в контексте
            setFilter(prev => ({
                ...prev,
                category: categorySlug // Например, 'girls', 'boys'
            }));
        } else {
            // Если мы находимся на чистом /catalog, удаляем фильтр категории
             setFilter(prev => {
                const { category, ...rest } = prev; 
                return rest; 
            });
        }
    // Зависимости: effect должен перезапускаться при изменении slug или функции setFilter
    }, [categorySlug, setFilter]); 

    return (
        <main style={{ minWidth: '1000px'}}>
            <Filter />
            <FilteredProducts />
        </main>
    );
};

export default Catalog;