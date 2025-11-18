import React, { useState, useEffect, useRef, useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { CustomContext } from '../../../store/store.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import './FilterDropDown.css';

const FilterDropdown = ({ filter }) => {
  const { filter: currentFilter, setFilter } = useContext(CustomContext);
  const navigate = useNavigate();
  const { categorySlug } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Определяем выбранное значение
  const [selectedValue, setSelectedValue] = useState(filter.name);

  // Синхронизируем с глобальным фильтром или URL при монтировании/обновлении URL
  useEffect(() => {
    if (filter.id === 'category') {
      if (categorySlug) {
        const formattedCategory = filter.options.find(
          opt => opt.toLowerCase().replace(/\s+/g, '-') === categorySlug
        );
        if (formattedCategory) {
          setSelectedValue(formattedCategory);
          setFilter(prev => ({
            ...prev,
            category: formattedCategory
          }));
        }
      } else {
        setSelectedValue(currentFilter.category || filter.name);
      }
    } else {
      setSelectedValue(currentFilter[filter.id] || filter.name);
    }
  }, [categorySlug, currentFilter, filter, setFilter]);

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);

    setFilter(prev => ({
      ...prev,
      [filter.id]: option
    }));

    // Если это категория — меняем URL
    if (filter.id === 'category') {
      const slug = option ? option.toLowerCase().replace(/\s+/g, '-') : '';
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
