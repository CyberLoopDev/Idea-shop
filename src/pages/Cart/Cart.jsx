import React, { useContext } from 'react'
import { CustomContext } from '../../store/store'
import defaultImg from '../../assets/tovar_dlya_prodazhi.jpg'
import { useNavigate } from 'react-router-dom'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineShareAlt,
  AiOutlineArrowLeft,
} from 'react-icons/ai'
import './Cart.css'

const Cart = () => {
  const {
    cart,
    removeFromCart,
    toggleFavorite,
    isFavorite,
    incrementItemCount,
    decrementItemCount,
    cartCount,
    totalPrice,
  } = useContext(CustomContext)
  const navigate = useNavigate()

  return (
    <div className="cart-page-wrapper">
      <div className="cart-header-section">
        <button
          onClick={() => navigate('/catalog')}
          className="back-to-shop-link"
        >
          <AiOutlineArrowLeft /> Вернуться к покупкам
        </button>
        <h1>Корзина</h1>
      </div>
      <div className="cart-content-layout">
        <div className="cart-items-list-section">
          {cart.length === 0 ? (
            <p className="empty-cart-message">Ваша корзина пуста. 🛒</p>
          ) : (
            cart.map((item) => (
              <div key={item._id} className="cart-item-card">
                <img
                  src={item.img || defaultImg}
                  alt={item.name || item.title}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = defaultImg
                  }}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name || item.title}</h3>
                  <div className="cart-item-actions">
                    <span
                      className="action-link add-to-favorite"
                      onClick={() => toggleFavorite(item)}
                    >
                      {isFavorite(item._id) ? (
                        <AiFillHeart color="#E3456F" />
                      ) : (
                        <AiOutlineHeart />
                      )}{' '}
                      В избранное
                    </span>
                    <span
                      className="action-link remove-item"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <AiOutlineDelete /> Удалить
                    </span>
                  </div>
                </div>
                <div className="cart-item-quantity-controls">
                  <button
                    onClick={() => decrementItemCount(item._id)}
                    disabled={item.count <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.count}</span>
                  <button onClick={() => incrementItemCount(item._id)}>
                    +
                  </button>
                </div>
                <div className="cart-item-total-price">
                  {(item.price * item.count).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary-panel">
          <h2 className="summary-panel-title">В корзине</h2>
          <div className="summary-info-line">
            <span>Товаров:</span>
            <span>{cartCount}</span>
          </div>
          <input
            type="text"
            placeholder="Введите промокод"
            className="promo-code-input"
          />
          <div className="summary-total-amount-line">
            <span>Итого:</span>
            <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
          </div>
          <button
            className="checkout-button"
            onClick={() => navigate('/orders')}
            disabled={cart.length === 0}
          >
            Оформить заказ
          </button>
          <button className="share-button">
            Поделиться <AiOutlineShareAlt />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart










