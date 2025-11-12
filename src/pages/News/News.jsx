import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './News.css';
import { newsItems } from '../../data/componentsData';

const categories = [
  'Все',
  'Детская одежда',
  'Выбор одежды',
  'Уход',
  'Качество',
  'Стирка',
  'Одежда для девочка',
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredNews = activeCategory === 'Все'
    ? newsItems
    : newsItems.filter(item =>
        item.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  return (
    <div className="container">
      <Breadcrumb />
      <div className="news-block">
        <h2 className="news-title">Блог</h2>

        <div className="news-btn-block">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`news-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredNews.map(item => (
          <div className="news-block-box" key={item.id}>
            <img src={`${item.image}`} alt={item.title} />
            <div className="news-box">
              <p className="news-number">{item.date}</p>
              <div className="news-small-title">{item.title}</div>
              <p className="news-text">{item.description}</p>
              <div className="news-small-box">
                {item.tags.map((tag, i) => (
                  <a key={i} href="">{tag}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;