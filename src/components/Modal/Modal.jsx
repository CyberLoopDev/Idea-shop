import './Modal.css'
import { categoriesData } from '../../data/componentsData'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CustomContext } from '../../store/store'

const Modal = ({ closeForm }) => {
  const { setFilter } = useContext(CustomContext);
  const navigate = useNavigate();

  const handleCategoryClick = (item) => {
    // Устанавливаем фильтр категории
    setFilter(prev => ({
      ...prev,
      category: item.slug   // предполагается, что в categoriesData есть slug
    }));

    // Закрываем модалку
    closeForm();

    // Переходим на страницу категории
    navigate(item.url);
  };

  return (
    <div className="showform-overlay">
      <div className="showform-box">
        <button className="close-form" onClick={closeForm}>×</button>

        <div className="showform-grid">
          {categoriesData.items.map(item => (
            <div className="item" key={item.slug}>
              <div onClick={() => handleCategoryClick(item)}>
                <img className='showform-img' src={item.image} alt={item.name} />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal;
