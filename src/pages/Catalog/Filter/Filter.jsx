import React, { useContext } from 'react';
import { filterOptionsData } from '../../../data/componentsData.jsx';
import FilterDropdown from '../FilterDropDown/FilterDropDown.jsx';
import './Filter.css';
import { CustomContext } from '../../../store/store.jsx';

const Filter = () => {
  const { setFilter } = useContext(CustomContext);

  const reset = () => setFilter({
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
    tags: []
  });

  return (
    <section className="advanced-filters-section">
      <div className="container">
        <div className="filters-header">
          <div>
            <h2 className="filters-title">{filterOptionsData.title}</h2>
          </div>
          <button className="filters-reset-btn" onClick={reset}>Сбросить</button>
        </div>

        <div className="filters-grid">
          {filterOptionsData.filters.map(f => <FilterDropdown key={f.id} filter={f} />)}
        </div>
      </div>
    </section>
  );
};

export default Filter;
