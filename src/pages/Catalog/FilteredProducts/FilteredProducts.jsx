import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../../store/store.jsx";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";
import "./FilteredProducts.css";

const FilteredProducts = () => {
  const { filter, getAllProducts } = useContext(CustomContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Пагинация
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    limit: 10,
  });

  // Сбрасываем страницу при изменении фильтров
  useEffect(() => {
    fetchProducts(1); // сразу на первую страницу
  }, [filter]);

  // Загрузка данных
  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const data = await getAllProducts(filter, page, pagination.limit);

      if (data?.products && data?.pagination) {
        setProducts(data.products);
        setPagination({
          currentPage: data.pagination.currentPage,
          totalPages: data.pagination.totalPages,
          totalProducts: data.pagination.totalProducts,
          limit: data.pagination.limit,
        });
      } else {
        setProducts([]);
        setPagination({ currentPage: 1, totalPages: 1, totalProducts: 0, limit: 10 });
      }
    } catch (err) {
      console.error("Ошибка загрузки:", err);
      setProducts([]);
      setPagination({ currentPage: 1, totalPages: 1, totalProducts: 0, limit: 10 });
    } finally {
      setLoading(false);
    }
  };

  // Переключение страницы
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchProducts(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) return <p>Загрузка...</p>;

  return (
    <div className="filtered-products">
      <h3 className="products-count">Найдено товаров: {pagination.totalProducts}</h3>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item._id || item.id} product={item} />
          ))}
        </div>
      ) : (
        <p>Нет товаров</p>
      )}

      {pagination.totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            disabled={pagination.currentPage === 1}
            onClick={() => handlePageChange(pagination.currentPage - 1)}
          >
            ← Предыдущая
          </button>

          <div className="pagination-pages">
            {Array.from({ length: pagination.totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-number ${pagination.currentPage === i + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            className="pagination-btn"
            disabled={pagination.currentPage === pagination.totalPages}
            onClick={() => handlePageChange(pagination.currentPage + 1)}
          >
            Следующая →
          </button>
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
