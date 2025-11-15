
import React, { useState, useEffect, useRef, useContext } from 'react';
import './FilterDropDown.css';
import { FiChevronDown } from 'react-icons/fi';
import { CustomContext } from '../../../store/store.jsx';

const FilterDropdown = ({ filter }) => {
  const { setFilter } = useContext(CustomContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(filter.name);
  const dropdownRef = useRef(null);

  useEffect(() => {
  }, [filter]);

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);

    
    setFilter(prev => ({
      ...prev,
      [filter.id]: option
    }));
  };

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
              <li key={i} onClick={() => handleSelect(option)}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
