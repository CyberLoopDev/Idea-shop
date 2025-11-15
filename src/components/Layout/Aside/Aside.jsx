import { categoriesData, sidebarData } from '../../../data/componentsData.jsx';
import { Link, NavLink } from 'react-router-dom';
import './Aside.css';

const Sidebar = () => {
   

    if (!categoriesData) return null;

    return (
        <aside className="sidebar">
            <div className="container">
                <nav className="sidebar-nav">
                <ul>
                    {categoriesData.items.map((category, index) => (
                        <li key={index}>
                            <NavLink to={category.url}>{category.name}</NavLink>
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