import React, { useContext } from 'react';
import { CustomContext } from '../../store/store';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CustomContext);

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.count), 0);
    
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
                            <h3>{item.title}</h3>
                            <p>Цена: {item.price} руб.</p>
                            <p>Количество: {item.count}</p>
                            <p>Сумма: {item.price * item.count} руб.</p>
                            <button onClick={() => removeFromCart(item.id)}>
                                 Удалить
                            </button>
                        </div>
                    ))
                )}
            </div>
            
            {cart.length > 0 && (
                <div className="cart-total">
                    <h2>Общая стоимость: {totalPrice} руб.</h2>
                </div>
            )}
        </div>
    );
}
export default Cart;