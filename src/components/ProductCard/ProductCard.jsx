import React, { useContext } from "react";
import "./ProductCard.css";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CustomContext } from "../../store/store";
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
const ProductCard = ({ product }) => {
    
    const { id, name, imgUrl, price } = product; 

    const { addToCart, toggleFavorite, isFavorite } = useContext(CustomContext);

    const isFav = isFavorite(id);

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
            
            <button 
                className="favorite-btn" 
                onClick={() => toggleFavorite(product)}
            >
                {isFav ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
            </button>


            <p className="product-title">{name}</p>

            <p className="group">
                <span className="product-price">{price} ₽</span>
                <span className="cart-icon">
                    <button 
                        className="cart-button" 
                        onClick={() => addToCart(product)}
                    >
                        <BsCart3 size={20} />
                    </button>
                </span>
            </p>
        </div>
    );
};

export default ProductCard;