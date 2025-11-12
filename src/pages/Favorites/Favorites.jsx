
import React, { useContext } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import defaultImg from '../../assets/tovar_dlya_prodazhi.jpg'
import { CustomContext } from '../../store/store'
import { FaTrash, FaShoppingCart } from 'react-icons/fa'
import { toast } from 'react-toastify'
import './Favorites.css'

const Favorites = () => {
  const { favorites, toggleFavorite, addToCart } = useContext(CustomContext)

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.info(`${product.name} добавлен в корзину!`, { autoClose: 1000 })
  }

  const handleRemoveFavorite = (product) => {
    toggleFavorite(product)
    toast.warning(`${product.name} удален из избранного.`, { autoClose: 1000 })
  }

  const getProductName = (product) =>
    product.name || product.title || 'Товар без названия'
  const getProductPrice = (product) =>
    product.price?.toLocaleString('ru-RU') || 'Нет цены'

  return (
    <div className="container">
      <div className="favorites">
        <Breadcrumb />
        <h1>Избранное ({favorites.length})</h1>

        <div className="favorites-list">
          {favorites.length === 0 ? (
            <p className="empty-favorites-message">
              Список избранных товаров пуст. Добавьте что-нибудь, чтобы не
              потерять! ❤️
            </p>
          ) : (
            favorites.map((product) => (
              <div key={product._id} className="favorite-item">
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFavorite(product)}
                >
                  <FaTrash size={16} />
                </button>

                <img
                  src={product.img || defaultImg}
                  alt={getProductName(product)}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = defaultImg
                  }}
                  className="favorite-img"
                />
                <h3 className="favorite-title">{getProductName(product)}</h3>
                <p className="favorite-price">{getProductPrice(product)} ₽</p>

                <button
                  className="btn-add-to-cart-fav"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart size={16} style={{ marginRight: '8px' }} />В
                  корзину
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
export default Favorites





