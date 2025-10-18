import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomContext } from '../../../store/store';
import './Aside.css';

const Sidebar = () => {
    const { sidebarData } = useContext(CustomContext);

    if (!sidebarData) return null;

    return (
        <aside className="sidebar">
            <div className="container">
                <nav className="sidebar-nav">
                <ul>
                    {sidebarData.categories.map((category, index) => (
                        <li key={index}>
                            <Link to={category.url}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-socials">
                <h3 className="sidebar-title">Подписывайтесь</h3>
                <div className="social-icons-group">
                    {sidebarData.socials.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>

            <div className="sidebar-popular">
                <h3 className="sidebar-title">Популярное</h3>
                <div className="popular-list">
                    {sidebarData.popularProducts.map((product) => (
                        <Link to={product.url} key={product.id} className="popular-item">
                            <div className="popular-item__image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="popular-item__info">
                                <span className="popular-item__name">{product.name}</span>
                                <b className="popular-item__price">{product.price}</b>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            </div>
            
        </aside>
    );
};

export default Sidebar;