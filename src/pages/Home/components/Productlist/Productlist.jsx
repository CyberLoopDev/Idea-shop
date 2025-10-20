import ProductCard from '../../../../components/ProductCard/ProductCard'
import './ProductList.css'
import df from '../../../../assets/1.webp'
import { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const ProductList = () => {


    const [active, setActive] = useState(0)


  return (
    <div className='product-list'>
        <div className="container">
      <ul className='product-categories'>
        <p onClick={() => setActive(0)} className={`category-text ${active === 0 ? 'active' : ''}`}>Хиты</p>
        <p onClick={() => setActive(1)} className={`category-text ${active === 1 ? 'active' : ''}`}>Новинки</p>
        <p onClick={() => setActive(2)} className={`category-text ${active === 2 ? 'active' : ''}`}>Акции</p>
      </ul>
      <div className="products-container">
        <ProductCard title='Кукла' price={'3200'} imgUrl={df} />
        <ProductCard title='Кукла' price={'3200'} imgUrl={df} />
        <ProductCard title='Кукла' price={'3200'} imgUrl={df} />
        <ProductCard title='Кукла' price={'3200'} imgUrl={df} />
      </div>
      </div>
    </div>
  )
}

export default ProductList