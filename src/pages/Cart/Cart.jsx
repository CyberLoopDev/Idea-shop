import React, { useContext, useState } from 'react';
import { CustomContext } from '../../store/store';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import defaultImg from '../../assets/tovar_dlya_prodazhi.jpg';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CustomContext);
  const [showModal, setShowModal] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="container">
      <Breadcrumb />
      <h1>Корзина ({cart.length})</h1>

      <div className="cart-list">
        {cart.length === 0 ? (
          <p>Ваша корзина пуста. 🛒</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imgUrl || defaultImg}
                alt={item.title}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = defaultImg;
                }}
                className="cart-img"
              />
              <h3>{item.title}</h3>
              <p>Цена: {item.price} руб.</p>
              <p>Количество: {item.count}</p>
              <p>Сумма: {item.price * item.count} руб.</p>
              <button onClick={() => removeFromCart(item.id)}>Удалить</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Общая стоимость: {totalPrice} руб.</h2>
          <button className="checkout-btn" onClick={() => setShowModal(true)}>
            Перейти к оформлению
          </button>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Оформление заказа</h3>
            <p>Здесь будет форма или информация для оформления заказа.</p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
