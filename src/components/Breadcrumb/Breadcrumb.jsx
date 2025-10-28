import { useLocation, Link } from "react-router-dom"
import "./Breadcrumb.css"

const titles = {
  "": "Главная",
  delivery: "Доставка",
  payment: "Оплата",
  return: "Обмен и возврат",
  aboutus: "О нас",
  news: "Новости",
  details: "Реквизиты",
  favorites: "Избранное",
  cart: "Корзина",
  profile:"Личный кабинет"
}

const Breadcrumb = () => {
  const location = useLocation()
  const segments = location.pathname.split("/").filter(Boolean)

  return (
    <nav className="breadcrumb">
      <Link to="/">Главная</Link>
      {segments.map((seg, i) => {
        const path = "/" + segments.slice(0, i + 1).join("/")
        return (
          <span key={i}>
            {" / "}
            <Link to={path}>{titles[seg] || decodeURIComponent(seg)}</Link>
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
