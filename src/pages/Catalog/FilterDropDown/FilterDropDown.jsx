import React, { useState, useEffect, useRef } from 'react';
import './FilterDropdown.css';
import { FiChevronDown } from 'react-icons/fi';

const FilterDropdown = ({ filter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(filter.name);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    return (
        <div className="filter-dropdown" ref={dropdownRef}>
            <button className="filter-dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedValue}</span>
                <FiChevronDown className={`toggle-arrow ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        {filter.options.map((option, index) => (
                            <li key={index} onClick={() => handleSelect(option)}>
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