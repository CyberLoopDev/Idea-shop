import "./ProductCard.css";
import { BsCart3 } from "react-icons/bs";
import defaultImg from "../../assets/tovar_dlya_prodazhi.jpg";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";


const ProductCard = ({ name, imgUrl, price }) => {

  const [favorite, setFavorite] = useState()

  return (
    <div className="product-card">
      
      <img
        src={imgUrl || defaultImg}
        alt={name}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = defaultImg;
        }}
        className="product-img"
      />

      <p className="product-title">{name}</p>

      <p className="group">
        <span className="product-price">{price} ₽</span>
        <span className="cart-icon">
          <BsCart3 size={20} />
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
