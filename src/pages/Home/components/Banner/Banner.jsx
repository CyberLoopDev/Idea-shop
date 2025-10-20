import { promoBannersData } from '../../../../data/componentsData.jsx';
import { Link } from 'react-router-dom';
import { CustomContext } from '../../../../store/store';
import './Banner.css';

const PromoBanners = () => {
    

    if (!promoBannersData) return null;

    return (
        <section className="promo-banners">
            <div className="container">
                <div className="promo-banners__grid">
                    {promoBannersData.map((banner) => (
                        <Link 
                            to={banner.url} 
                            key={banner.id} 
                            className="promo-card"
                           
                            style={{ backgroundImage: `url(${banner.backgroundImage})` }}
                        >
                            <div className="promo-card__content">
                                <h2 className="promo-card__title">{banner.title}</h2>
                                <p className="promo-card__subtitle">{banner.subtitle}</p>
                            </div>
                           
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;