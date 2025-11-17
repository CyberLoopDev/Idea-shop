import React, { useContext, useState, useMemo } from 'react'
import { CustomContext } from '../../store/store'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import defaultImg from '../../assets/tovar_dlya_prodazhi.jpg'
import './Order.css'

const Orders = () => {
  const { cart, setCart} = useContext(CustomContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    city: '',
    address: '',
    comment: '',
    name: '',
    isMember: false,
    password: '',
    confirmPassword: '',
    payment: 'cash',
  })

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.count, 0),
    [cart]
  )
  const deliveryCost = 200
  const totalAmountWithDelivery = totalPrice + deliveryCost

  const userData = JSON.parse(localStorage.getItem('user')) || {}
  const userId = userData._id
  const userEmail = userData.gmail
  const userPhone = userData.phone
  const userName = userData.full_name

  const isFormValid = () => {
    if (!form.city || !form.name) return false
    if (form.isMember && (!form.password || !form.confirmPassword || form.password !== form.confirmPassword)) return false
    if (cart.length === 0) return false
    return true
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const clearCart = () => {
    setCart([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isFormValid()) {
      toast.error('Пожалуйста, заполните все обязательные поля корректно и добавьте товары в корзину.')
      return
    }

    try {

      const user = await JSON.parse(localStorage.getItem('user'))

      console.log(user.full_name);
      

      const res = await fetch(import.meta.env.VITE_API_URL + '/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          userId,
          phone: userPhone,
          email: userEmail,
          full_name:  user.full_name,
          address: form.address,
          comment: form.comment,
          payment: form.payment,
          total: totalAmountWithDelivery,
          items: cart.map(item => ({
            productId: item._id?.toString(),
            name: item.name || item.title,
            price: item.price,
            quantity: item.count,
          })),
        }),
      })

      const data = await res.json()
      if (res.ok) {
        toast.success('Заказ успешно оформлен!')
        clearCart()
        setForm({
          city: '',
          address: '',
          comment: '',
          name: '',
          isMember: false,
          password: '',
          confirmPassword: '',
          payment: 'cash',
        })
        navigate('/')
      } else {
        toast.error(data.message || 'Ошибка при оформлении заказа')
      }
    } catch (err) {
      console.error('Ошибка при отправке заказа:', err)
      toast.error('Ошибка соединения с сервером')
    }
  }

  return (
    <div className="orders-page-wrapper">
      <div className="orders-content-layout">
        <form className="order-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Оформление заказа</h2>

          <div className="form-section-title">Доставка</div>
          <div className="form-group">
            <label htmlFor="city">Населённый пункт *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="delivery-method">
            <label className="radio-label">
              <input type="radio" name="deliveryType" value="courier" checked readOnly />
              Курьером
            </label>
            <span className="delivery-info">Доставка курьером в пределах МКАД</span>
            <span className="delivery-price">+ 200 ₽</span>
          </div>

          <div className="form-group">
            <label htmlFor="address">Адрес</label>
            <textarea
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="form-textarea"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="comment">Комментарии к заказу</label>
            <textarea
              id="comment"
              name="comment"
              value={form.comment}
              onChange={handleChange}
              className="form-textarea"
            ></textarea>
          </div>

          <div className="form-section-title">Покупатель</div>
          <div className="form-group">
            <label htmlFor="name">Контактное лицо (ФИО) *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name || userName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {form.isMember && (
            <>
              <div className="form-group">
                <label htmlFor="password">Пароль *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Повторите пароль *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </>
          )}

          <div className="form-section-title payment-method-title">Способ оплаты *</div>
          <div className="form-group radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={form.payment === 'cash'}
                onChange={handleChange}
                required
              />
              Наличными курьеру
            </label>
          </div>

          <button type="submit" className="submit-order-button" disabled={!isFormValid()}>
            Подтвердить заказ
          </button>
        </form>

        <div className="order-summary">
          {cart.length === 0 ? (
            <p className="summary-empty-message">Корзина пуста. Добавьте товары.</p>
          ) : (
            cart.map(item => (
              <div key={item._id || item.name} className="summary-item">
                <img
                  src={item.img || defaultImg}
                  alt={item.title}
                  onError={e => { e.target.onerror = null; e.target.src = defaultImg }}
                  className="summary-item-image"
                />
                <span className="summary-item-name">{item.name || item.title}</span>
                <span className="summary-item-quantity">{item.count} шт</span>
                <span className="summary-item-price">{item.price * item.count} ₽</span>
              </div>
            ))
          )}

          <div className="summary-total-lines">
            <div className="summary-line">
              <span>Сумма по товарам</span>
              <span>{totalPrice} ₽</span>
            </div>
            <div className="summary-line">
              <span>Стоимость доставки</span>
              <span>{deliveryCost} ₽</span>
            </div>
            <div className="summary-line total-amount-final">
              <span>Итого:</span>
              <span>{totalAmountWithDelivery} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
