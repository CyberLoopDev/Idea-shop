import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CustomContext } from "../../store/store";
import defaultImg from "../../assets/tovar_dlya_prodazhi.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, img, price, tags } = product;
  const { addToCart, toggleFavorite, isFavorite } = useContext(CustomContext);
  const [count, setCount] = useState(0);
  const isFav = isFavorite(id);

  const navigate = useNavigate()

  const showToast = (text) => {
    toast.success(text , {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
    });
  };

  return (
    <div className="product-card">
      
        <div className="product-tags">
            {tags.map(item => (
                <span key={item} >{item}</span>    
            ))}
        </div>
      <img
        src={img || defaultImg}
        alt={name}
        onClick={() => navigate(`/product/${product.id}`)}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImg;
        }}
        className="product-img"
      />

      <button className="favorite-btn" onClick={ () => {
         toggleFavorite(product)
        showToast(`${!isFav ? 'Успешно добавлено' : 'Успешно удалено'}`)
        }}>
        {isFav ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
      </button>

     

      
         <p className="product-title">{name}</p>
         <p className="group">    
        <span className="product-price">{price} ₽</span>
        <span className="cart-icon">
          <span className="count">{count}</span>
          <button
            className="cart-button"
            onClick={() => {
                 addToCart(product);
              setCount(count + 1);
              showToast('Успешно добавлено');
            }}
          >
            {count > 0 ? "+1шт" : <BsCart3 size={20} />}
          </button>
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
