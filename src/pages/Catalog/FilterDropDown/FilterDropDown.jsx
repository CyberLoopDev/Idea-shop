import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FilterDropDown.css';
import { FiChevronDown } from 'react-icons/fi';
import { CustomContext } from '../../../store/store.jsx';

const categoryMap = {
  "Для девочек": "girls",
  "Для мальчиков": "boys",
  "Для новорожденных": "newborns",
  "Канцелярия": "stationery",
  "Аксессуары": "accessories",
  "Спорт": "sport",
  "Настольные игры": "board-games",
  "Коляски": "strollers",
  "Развитие": "development",
  "Конструкторы": "constructors",
  "Хиты": "hits",
  "Новинки": "new",
  "Акции": "sale",
  "Популярное": "popular"
};

// Обратная мапа для чтения из URL
const reverseCategoryMap = Object.fromEntries(
  Object.entries(categoryMap).map(([k, v]) => [v, k])
);

const FilterDropdown = ({ filter }) => {
  const { setFilter } = useContext(CustomContext);
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(filter.name);

  const dropdownRef = useRef(null);

  // Синхронизация при загрузке или смене URL
  useEffect(() => {
    if (filter.id === 'category' && categorySlug) {
      const categoryName = reverseCategoryMap[categorySlug];
      if (categoryName) {
        setSelectedValue(categoryName);
        setFilter(prev => ({ ...prev, category: categoryName }));
      }
    }
  }, [categorySlug, filter.id, setFilter]);

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);

    setFilter(prev => ({
      ...prev,
      [filter.id]: option
    }));

    // Если это категория — меняем URL
    if (filter.id === 'category') {
      const slug = categoryMap[option];
      navigate(`/catalog/${slug}`);
    }
  };

  // Закрытие дропдауна при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <button className="filter-dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedValue}</span>
        <FiChevronDown className={`toggle-arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {filter.options.map((option, i) => (
              <li key={i} onClick={() => handleSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
