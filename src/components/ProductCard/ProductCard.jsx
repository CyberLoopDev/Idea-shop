import './ProductCard.css'
import { BsCart3 } from "react-icons/bs";
import defaultImg from '../../assets/tovar_dlya_prodazhi.jpg'

const ProductCard = ({ name, imgUrl, price }) => {
  return (
    <div className='product-card'>
      <img src={imgUrl ? imgUrl : defaultImg} alt="productImg" className="product-img" />
      <p className="product-title">{name}</p>
      <p className="group"><span className="product-price">{price}</span><span className='cart-icon'><BsCart3 className='' size={20} /></span></p>
    </div>
  )
}

export default ProductCard