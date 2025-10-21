import ProductCard from '../../../../components/ProductCard/ProductCard'
import './ProductList.css'
import df from '../../../../assets/1.webp'
import { useEffect, useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const ProductList = () => {


    const [active, setActive] = useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:3000/products?tags=${active === 0 ? 'хит' : active === 1 ? 'новинка' : 'скидка'}`);
    const data = await res.json();
    setProducts(data);
  };
  fetchProducts();
}, [active]);

  return (
    <div className='product-list'>
        <div className="container">
      <ul className='product-categories'>
        <p onClick={() => setActive(0)} className={`category-text ${active === 0 ? 'active' : ''}`}>Хиты</p>
        <p onClick={() => setActive(1)} className={`category-text ${active === 1 ? 'active' : ''}`}>Новинки</p>
        <p onClick={() => setActive(2)} className={`category-text ${active === 2 ? 'active' : ''}`}>Скидки</p>
      </ul>
      <div className="products-container">
      { products && products.map(item => (
        <ProductCard name={item.name} price={item.price} />
      )) }
      </div>
      </div>
    </div>
  )
}

export default ProductList