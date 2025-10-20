import { featuresData } from '../../../../data/componentsData.jsx';
import { CustomContext } from '../../../../store/store';
import './Features.css';

const Features = () => {
    

    if (!featuresData) return null;

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-grid">
                    {featuresData.items.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <p className="feature-text">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;