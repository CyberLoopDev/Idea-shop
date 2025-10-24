import React from "react";  
import './Discount.css'
import discountImg from '../../../../assets/discount-photo.webp'
import { Link } from "react-router-dom";

const Discount = () => {
    return (
        <div className="discount">
            <div className="container">
                <div className="discount-block">
                    <img src={discountImg} alt=""  className="discount-img"/>
                    <div className="discount-box">
                        <div className="discount-small-box">
                            <h2 className="discount-title">Скидки на детскую мебель</h2>
                            <p className="discount-text">Сезонные скидки,распродажи,ликвидация! Все товары с сезонными скидками. </p>
                        </div>
                        <Link to='/catalog'><button className="discount-btn">Все товары</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}   


export default Discount                         