
import { createContext, useState, useEffect, useMemo } from 'react'

export const CustomContext = createContext()

const getLocalData = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue
  } catch (error) {
    console.error(`Ошибка чтения Local Storage для ключа ${key}:`, error)
    return defaultValue
  }
}

const setLocalData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Ошибка записи Local Storage для ключа ${key}:`, error)
  }
}

const parsePrice = (price) => {
  if (typeof price === 'number') return price
  if (typeof price === 'string') {
    const cleanedPrice = price.replace(/[^\d.,]/g, '').replace(',', '.')
    return parseFloat(cleanedPrice) || 0
  }
  return 0
}

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => getLocalData('cart', []))
  const [favorites, setFavorites] = useState(() =>
    getLocalData('favorites', [])
  )
  const [filter, setFilter] = useState({
    color: null,
    category: null,
    price: null,
    minPrice: null,
    maxPrice: null,
    country: null,
    country_of_origin: null,
    minWeight: null,
    maxWeight: null,
    minRating: null,
    maxRating: null,
    sort: null,
    material: null,
    tags: [],
    search: '',
  })

  useEffect(() => {
    setLocalData('cart', cart)
  }, [cart])

  useEffect(() => {
    setLocalData('favorites', favorites)
  }, [favorites])

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.count, 0),
    [cart]
  )

  const totalPrice = useMemo(
    () =>
      cart.reduce((sum, item) => sum + parsePrice(item.price) * item.count, 0),
    [cart]
  )

  const getAllProducts = async (currentPage = 1, limit = 10) => {
    try {
      const params = {}
      if (filter.category) params.category = filter.category
      if (filter.color) params.color = filter.color
      if (filter.material) params.material = filter.material
      if (filter.country_of_origin)
        params.country_of_origin = filter.country_of_origin

      if (filter.price === 'До 1000 ₽') params.maxPrice = 1000
      if (filter.price === '1000-5000 ₽') {
        params.minPrice = 1000
        params.maxPrice = 5000
      }
      if (filter.price === 'От 5000 ₽') params.minPrice = 5000

      if (filter.minWeight) params.minWeight = filter.minWeight
      if (filter.maxWeight) params.maxWeight = filter.maxWeight
      if (filter.minRating) params.minRating = filter.minRating
      if (filter.maxRating) params.maxRating = filter.maxRating
      if (filter.tags?.length) params.tags = filter.tags.join(',')
      if (filter.search) params.q = filter.search

      if (filter.sort) {
        const sortMap = {
          'По умолчанию': '',
          'Сначала дешевле': 'price-asc',
          'Сначала дороже': 'price-desc',
        }
        params.sort = sortMap[filter.sort]
      }

      params._page = currentPage
      params._limit = limit

      const query = new URLSearchParams(params).toString()
      const res = await fetch(`http://localhost:3000/products?${query}`)
      if (!res.ok) throw new Error('Ошибка запроса')
      const data = await res.json()
      const totalCount = res.headers.get('X-Total-Count')

      return { products: data, totalCount: parseInt(totalCount, 10) }
    } catch (err) {
      console.error('Ошибка при получении продуктов:', err)
      return { products: [], totalCount: 0 }
    }
  }

  const getProductById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`)
      if (!res.ok) throw new Error('Ошибка загрузки товара')
      return await res.json()
    } catch (err) {
      console.error('Ошибка при получении товара', err)
      return null
    }
  }

  const addToCart = (product) => {
    if (!product || !product._id) return
    setCart((prev) => {
      const existing = prev.find((p) => p._id === product._id)
      return existing
        ? prev.map((p) =>
            p._id === product._id ? { ...p, count: (p.count || 1) + 1 } : p
          )
        : [...prev, { ...product, count: 1 }]
    })
  }

  const incrementItemCount = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  const decrementItemCount = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p._id !== id))
  }



  const toggleFavorite = (product) => {
    if (!product || !product._id) return
    setFavorites((prev) => {
      const isCurrentlyFav = prev.some((p) => p._id === product._id)
      return isCurrentlyFav
        ? prev.filter((p) => p._id !== product._id)
        : [...prev, product]
    })
  }

  const isFavorite = (id) => favorites.some((p) => p._id === id)

  const value = {
    
    filter,
    setFilter,
    getAllProducts,
    getProductById,
    cart,
    favorites,
    cartCount,
    totalPrice,
    addToCart,
    removeFromCart,
    toggleFavorite,
    isFavorite,
    incrementItemCount,
    decrementItemCount,
  }

  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  )
}




