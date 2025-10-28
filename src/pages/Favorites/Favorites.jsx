import React, { useContext } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import defaultImg from '../../assets/tovar_dlya_prodazhi.jpg';

import { CustomContext } from '../../store/store';
import './Favorites.css';

const Favorites = () => {
    const { favorites, toggleFavorite } = useContext(CustomContext);
    
    return (
        <div className="container">
            <div className="favorites">
            <Breadcrumb />
            <h1>Избранное ({favorites.length})</h1>
            
            <div className="favorites-list">
                {favorites.length === 0 ? (
                    <p>Список избранных товаров пуст. Добавьте что-нибудь! ❤️</p>
                ) : (
                    favorites.map(product => (
                       <div key={product.id} className="favorite-item">
  <img
    src={product.imgUrl || defaultImg}
    alt={product.title}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = defaultImg;
    }}
    className="favorite-img"
  />
  <h3>{product.title}</h3>
  <p>{product.price} руб.</p>
  <button onClick={() => toggleFavorite(product)}>
    ❌ Удалить из избранного
  </button>
</div>

                    ))
                )}
                </div>
                
            </div>
        </div>
    );
};
export default Favorites;