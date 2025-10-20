import './ProductCard.css'
import { BsCart3 } from "react-icons/bs";

const ProductCard = ({ title, imgUrl, price }) => {
  return (
    <div className='product-card'>
      <img src={imgUrl} alt="productImg" className="product-img" />
      <p className="product-title">{title}</p>
      <p className="group"><span className="product-price">{price}</span><span className='cart-icon'><BsCart3 className='' size={20} /></span></p>
    </div>
  )
}

export default ProductCard