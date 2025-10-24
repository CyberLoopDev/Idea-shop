import React, { useState } from 'react';
import { filterOptionsData } from '../../../data/componentsData.jsx';
import FilterDropdown from '../FilterDropDown/FilterDropDown.jsx';
import './Filter.css';

const Filter = () => {
    const [filter, setFilter] = useState({
        sort: null,
        

    })
    return (
        <section className="advanced-filters-section">
            <div className="container">
                <div className="filters-header">
                    <div>
                        <h2 className="filters-title">{filterOptionsData.title}</h2>
                        <span className="filters-count">Товаров {filterOptionsData.totalProducts}</span>
                    </div>
                    <button className="filters-reset-btn">Сбросить</button>
                </div>
                <div className="filters-grid">
                    {filterOptionsData.filters.map(filter => (
                        <FilterDropdown key={filter.id} filter={filter} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Filter;