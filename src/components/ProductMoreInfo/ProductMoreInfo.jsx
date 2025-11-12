import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CustomContext } from '../../store/store'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { toast } from 'react-toastify'
import './ProductMoreInfo.css'
import defaultImg from '../../assets/tovar_dlya_prodazhi.jpg'

const ProductMoreInfo = () => {
  const { id } = useParams()
  const { addToCart, toggleFavorite, isFavorite, getProductById } =
    useContext(CustomContext)

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const isFav = product && isFavorite(product._id)

  const showToast = (text) => {
    toast.success(text, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: 'light',
    })
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await getProductById(id)

        if (data && data._id) {
          setProduct(data)
        } else {
          setProduct(null)
        }
      } catch (err) {
        console.error('Ошибка при загрузке товара:', err)
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id, getProductById])

  if (loading)
    return (
      <div className="product-page-container">
        <p>Загрузка...</p>
      </div>
    )

  if (!product)
    return (
      <div className="product-page-container">
        <p>Товар не найден</p>
      </div>
    )

  const hasCharacteristics =
    product.characteristics && Object.keys(product.characteristics).length > 0

  const MAX_DESCRIPTION_LENGTH = 300
  const descriptionText = product.description || ''
  const needsTruncate = descriptionText.length > MAX_DESCRIPTION_LENGTH
  const displayDescription =
    needsTruncate && !showFullDescription
      ? descriptionText.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
      : descriptionText

  return (
    <div className="container">
      <div className="product-layout">
        <div className="product-image-section">
          <img
            src={product.img || defaultImg}
            alt={product.name}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = defaultImg
            }}
            className="product-main-img"
          />
        </div>

        <div className="product-info-section">
          <h1 className="product-title-lg">{product.name}</h1>
          <div className="product-price-block">
            <span className="product-price-lg">
              {product.price.toLocaleString('ru-RU')} ₽
            </span>
          </div>

          <div className="product-actions-line">
            <div className="product-actions">
              <button
                className="btn-add-to-cart"
                onClick={() => {
                  addToCart(product)
                  showToast('Товар добавлен в корзину')
                }}
              >
                🛒 В корзину
              </button>
              <button className="btn-buy-one-click">Купить в 1 клик</button>
            </div>

            <button
              className="favorite-btn-lg"
              onClick={(e) => {
                e.stopPropagation()
                toggleFavorite(product)
                showToast(
                  isFav ? 'Удалено из избранного' : 'Добавлено в избранное'
                )
              }}
            >
              {isFav ? (
                <FaHeart size={24} color="#5c7cfa" />
              ) : (
                <FaRegHeart size={24} color="#333" />
              )}
            </button>
          </div>

          <hr className="separator-line" />

          <div className="description-block">
            <h3 className="block-title">Описание</h3>
            <p className="description-text">{displayDescription}</p>
            {needsTruncate && (
              <button
                className="btn-toggle-description"
                onClick={() => setShowFullDescription((prev) => !prev)}
              >
                {showFullDescription ? 'Свернуть' : 'Развернуть'}
              </button>
            )}
          </div>

          {hasCharacteristics && (
            <div className="characteristics-block">
              <h3 className="block-title">Характеристики</h3>

              <div className="characteristics-grid">
                {Object.entries(product.characteristics || {}).map(
                  ([key, value]) => (
                    <div key={key} className="char-item">
                      <span className="char-key">{key}</span>
                      <span className="char-value">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          <div className="reviews-block">
            <h3 className="block-title">Отзывы</h3>
            <p className="no-reviews-text">Отзывов еще никто не оставлял</p>
            <a href="#" className="link-write-review">
              Написать отзыв
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductMoreInfo