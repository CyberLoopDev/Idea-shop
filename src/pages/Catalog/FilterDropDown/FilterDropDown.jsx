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

  
  const selectedValue = currentFilter[filter.id] || filter.name;

  const handleSelect = (option) => {
    setIsOpen(false);

    
    setFilter(prev => ({
      ...prev,
      [filter.id]: option
    }));

    
    if (filter.id === 'category') {
      const slug = option ? option.toLowerCase().replace(/\s+/g, '-') : '';
      navigate(`/catalog/${slug}`);
    }
  };

 
  useEffect(() => {
    if (filter.id === 'category' && categorySlug) {
      const formattedCategory = filter.options.find(
        opt => opt.toLowerCase().replace(/\s+/g, '-') === categorySlug
      );
      if (formattedCategory) {
        setFilter(prev => ({
          ...prev,
          [filter.id]: formattedCategory
        }));
      }
    }
  }, [categorySlug, filter, setFilter]);

  
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
