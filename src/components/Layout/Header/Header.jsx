import React, { useContext, useState } from 'react';
import './Header.css'
import {NavLink, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Idealogo from '../../../assets/idea-logo.png'
import ProfileIcon from '../../../assets/profile-icon.png'
import FavoritesIcon from '../../../assets/favorites-icons.png'
import CartIcon from '../../../assets/cart-icons.png'
import { CustomContext } from '../../../store/store';
import Modal from '../../Modal/Modal';
import { BiLoaderCircle } from 'react-icons/bi';



const Header = () => {
  const [showForm,setShowForm] = useState(false)
  const toggleForm = () =>  setShowForm(true);
  const closeForm = () => setShowForm(false)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
const { cartCount, favorites, totalPrice } = useContext(CustomContext)

const navigate = useNavigate()


 const handleSearch = async (value) => {
    setSearch(value);

    if (value.trim().length < 2) {
      setResults([]);
      return;
    }

    try {
      setLoading(true)
      const res = await fetch( import.meta.env.VITE_API_URL + `/products?search=${value}`);
      const data = await res.json();
      setLoading(false)

      if (data.products) setResults(data.products.slice(0, 6)); 
    } catch (err) {
      console.log("Ошибка поиска:", err);
    }
  };
  return (
    <>
    <header className="header">



      <div className="header-top">

       <div className="container top">
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
</div>
     
<div className="container">
      <div className="header-bottom">
        <Link to='/'>
        <img  className='header-logo' src={Idealogo} alt="" />
        </Link>
        <button className="header-catalog-bth" onClick={toggleForm} >&#9776; Каталог</button>
       <div className="search-bar">
  <input 
    type="text" 
    placeholder="Поиск товаров..." 
    value={search}
    onChange={(e) => handleSearch(e.target.value)}
  />
  <button type="submit" className="search-button">
    { loading ? <BiLoaderCircle /> :
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
      <path d="M10 2a8 8 0 0 1 6.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12z"/>
    </svg>
}
  </button>

  {results.length > 0 && (
    <div className="search-results">
      {results.map(item => (
        <div 
          key={item._id} 
          className="search-item"
          onClick={() => {
            navigate(`/product/${item._id}`);
            setResults([]);
            setSearch("");
          }}
        >
          <img src={item.img} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )}
</div>

<div className="header-left">
  <NavLink to="/profile" className="header-icon-wrapper">
    <img src={ProfileIcon} alt="" className="header-icon" />
  </NavLink>

  <NavLink to="/favorites" className="header-icon-wrapper">
    <img src={FavoritesIcon} alt="" className="header-icon" />
    <span className="icon-count">{favorites.length}</span>
  </NavLink>

  <NavLink to="/cart" className="header-icon-wrapper ">
    <img src={CartIcon} alt="" className="header-icon" />
    <span className="icon-count-cart">{cartCount}</span>
    <div className="cart-total-display">
      <span className="total-amount">{totalPrice}</span>
      <span className="currency-symbol">₽</span>
    </div>
  </NavLink>
</div>

      </div>


      </div>
    </header>
 { showForm && <Modal closeForm={closeForm} /> }
 </>
  )
}

export default Header
