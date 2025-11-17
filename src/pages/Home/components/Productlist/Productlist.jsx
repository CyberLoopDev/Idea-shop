import ProductCard from "../../../../components/ProductCard/ProductCard";
import "./Productlist.css";
import { useEffect, useState } from "react";
import axios from "axios"; 
import { BiLoaderCircle } from "react-icons/bi";

const ProductList = () => {
  const [active, setActive] = useState(0);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    limit: 10,
  });
  const [loading, setLoading] = useState(false)

 
  const fetchProducts = async (page = 1) => {
    try {
      const tags = active === 0 ? "хит" : active === 1 ? "новинка" : "скидка";
      setLoading(true)
      const response = await axios.get("https://idea-shop-backend-1.onrender.com/products", {
        params: {
          tags, 
          page,
          limit: pagination.limit,
        },
      });
      setLoading(false)
      setProducts(response.data.products);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error("Ошибка при загрузке продуктов:", error);
    }
  };

 
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      fetchProducts(newPage);
    }
  };

 
  useEffect(() => {
    fetchProducts(1);
  }, [active]);

  return (
    <div className="product-list">
      <div className="container">
        <ul className="product-categories">
          <p
            onClick={() => setActive(0)}
            className={`category-text ${active === 0 ? "active" : ""}`}
          >
            Хиты
          </p>
          <p
            onClick={() => setActive(1)}
            className={`category-text ${active === 1 ? "active" : ""}`}
          >
            Новинки
          </p>
          <p
            onClick={() => setActive(2)}
            className={`category-text ${active === 2 ? "active" : ""}`}
          >
            Скидки
          </p>
        </ul>

        
       <div className="products-container">
    {loading === false && products.length > 0 ? (
        products.map((item) => (
            <ProductCard
                key={item._id}
                product={{
                    ...item,
                    id: item._id, 
                }}
            />
        ))
    ) : (
        <p className="loader"><BiLoaderCircle size={20} /></p>
    )}
</div>

       
       { !loading && <div className="pagination" style={{ marginTop: "20px", textAlign: "center" }}>
          <button  className="pagination-btn"
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            style={{ marginRight: "10px" }}
          >
            Предыдущая
          </button>
          <span>
            Страница {pagination.currentPage} из {pagination.totalPages}
          </span>
          <button className="pagination-btn"
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            style={{ marginLeft: "10px" }}
          >
            Следующая
          </button>
        </div> }
      </div>
    </div>
  );
};

export default ProductList;