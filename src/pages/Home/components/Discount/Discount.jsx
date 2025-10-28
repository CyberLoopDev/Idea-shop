import React from "react";  
import './Discount.css'
import discountImg from '../../../../assets/discount-photo.webp'
import { Link, useNavigate } from "react-router-dom";

const Discount = () => {
    const navigate = useNavigate()
    return (
        <div className="discount">
            <div className="container">
                <div className="discount-block">
                    <img onClick={() => navigate("/catalog")} src={discountImg} alt=""  className="discount-img"/>
                    <div className="discount-box">
                        <div onClick={() => navigate("/catalog")} className="discount-small-box">
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