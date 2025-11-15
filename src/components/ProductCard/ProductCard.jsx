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

  const navigate = useNavigate();
  const isFav = isFavorite(id);

  const showToast = (text) => {
    toast.success(text, {
      autoClose: 500,
      hideProgressBar: true,
      theme: "light",
    });
  };

  return (
    <div className="product-card">

    
      <div className="product-tags">
        {tags?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

    
      <button
        className="favorite-btn"
        onClick={() => {
          toggleFavorite(product);
          showToast(!isFav ? "Добавлено в избранное" : "Удалено");
        }}
      >
        {isFav ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
      </button>

    
      <div className="img-wrapper" onClick={() => navigate(`/product/${id}`)}>
        <img
          src={img || defaultImg}
          alt={name}
          className="product-img"
          onError={(e) => {
            e.target.src = defaultImg;
          }}
        />
      </div>

    
      <p className="product-title">{name}</p>

      
      <div className="bottom">
        <span className="product-price">{price} ₽</span>

        <div className="cart-icon">
          {count > 0 && <span className="count">{count}</span>}
          <button
            className="cart-button"
            onClick={() => {
              addToCart(product);
              setCount((prev) => prev + 1);
              showToast("Добавлено в корзину");
            }}
          >
            {count > 0 ? "+1" : <BsCart3 size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
