import React, { useContext, useState } from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Idealogo from '../../../assets/idea-logo.png'
import ProfileIcon from '../../../assets/profile-icon.png'
import FavoritesIcon from '../../../assets/favorites-icons.png'
import CartIcon from '../../../assets/cart-icons.png'
import img1 from '../../../assets/1.webp'
import img2 from '../../../assets/2.webp'
import img3 from '../../../assets/3.webp'
import img4 from '../../../assets/4.webp'
import img5 from '../../../assets/5.webp'
import img6 from '../../../assets/6.webp'
import img7 from '../../../assets/7.webp'
import img8 from '../../../assets/8.webp'
import img9 from '../../../assets/9.webp'
import img10 from '../../../assets/10.webp'
import img11 from '../../../assets/11.webp'
import img12 from '../../../assets/12.webp'
import img13 from '../../../assets/13.webp'
import { CustomContext } from '../../../store/store';



const Header = () => {

  const [showForm,setShowForm] = useState(false)
  const toggleForm = () =>  setShowForm(true);
  const closeForm = () => setShowForm(false)
  const { cartCount, favorites } = useContext(CustomContext)

  return (
    <header className="header">

<div className="container">

      <div className="header-top">


        <div className="header-top-links">
        <NavLink to="/payment" className='header-top-link'>Оплата</NavLink>
         <NavLink to="/delivery" className='header-top-link'>Доставка</NavLink>
          <NavLink to="/return" className='header-top-link'>Обмен и возврат</NavLink>
          </div>

          <div className="header-top-info">
            <h2 className="header-top-info-h2">Доставка с 8:00 до 23:00   </h2>
              <a href="tel:+78008008080" className="header-top-info-phone">+7 (800) 800-80-80</a>
          </div>

      </div>

      <div className="header-bottom">
        <Link to='/'>
        <img  className='header-logo' src={Idealogo} alt="" />
        </Link>
        <button className="header-catalog-bth" onClick={toggleForm} >&#9776; Каталог</button>
        <div class="search-bar">
  <input type="text" placeholder="Поиск" />
  <button type="submit" class="search-button">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
    <path d="M10 2a8 8 0 0 1 6.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12z"/>
  </svg>
</button>



</div>
<div className="header-left">
   <NavLink to="/profile" className='header-top-link'>
   <img src={ProfileIcon} alt="" className="header-icon" />
   </NavLink>
    <NavLink to="/favorites" className='header-top-link'>
    <span className='icon-count'>{ favorites.length }</span>
     <img src={FavoritesIcon} alt="" className="header-icon" />
    </NavLink>
    <NavLink to="/cart" className='header-top-link'>
    <span className='icon-count'>{ cartCount }</span>
     <img src={CartIcon} alt="" className="header-icon" />
    </NavLink>
</div>
      </div>

{showForm && (
  <div className="showform-overlay">
    <div className="showform-box">
      <button className="close-form" onClick={closeForm}>×</button>

      <div className="showform-grid">
        {/* Первый ряд */}
        <div className="row">
          <div className="item">
            <img src={img1} className="showform-img" />
            <p>Для девочек</p>
          </div>
          <div className="item">
            <img src={img2} className="showform-img" />
            <p>Для мальчиков</p>
          </div>
          <div className="item">
            <img src={img3} className="showform-img" />
            <p>Для новорожденных</p>
          </div>
          <div className="item">
            <img src={img4} className="showform-img" />
            <p>Канцелярия</p>
          </div>
          <div className="item">
            <img src={img5} className="showform-img" />
            <p>Аксессуары</p>
          </div>
        </div>

        {/* Второй ряд */}
        <div className="row">
          <div className="item">
            <img src={img6} className="showform-img" />
            <p>Спорт</p>
          </div>
          <div className="item">
            <img src={img7} className="showform-img" />
            <p>Настольные игры</p>
          </div>
          <div className="item">
            <img src={img8} className="showform-img" />
            <p>Коляски</p>
          </div>
          <div className="item">
            <img src={img9} className="showform-img" />
            <p>Развитие</p>
          </div>
          <div className="item">
            <img src={img10} className="showform-img" />
            <p>Конструкторы</p>
          </div>
        </div>

        {/* Третий ряд */}
        <div className="row">
          <div className="item">
            <img src={img11} className="showform-img" />
            <p>Хиты</p>
          </div>
          <div className="item">
            <img src={img12} className="showform-img" />
            <p>Новинки</p>
          </div>
          <div className="item">
            <img src={img13} className="showform-img" />
            <p>Скидки</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


      </div>
    </header>
  )
}

export default Header
