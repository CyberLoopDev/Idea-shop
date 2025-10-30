import { footerData } from '../../../data/componentsData.jsx';
import { NavLink, Link } from 'react-router-dom';
import { CustomContext } from '../../../store/store';
import './Footer.css';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
   

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!footerData) return null;

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer__top">
                    <Link to="/" className="footer__logo">
                        <img src={footerData.logo} alt="Idea Logo" />
                    </Link>
                </div>

                <div className="footer__main">
                    <div className="footer_main_group">
                    {footerData.columns.map((column, index) => (
                        <div key={index} className="footer__column">
                            <h4 className="footer__column-title">{column.title}</h4>
                            <ul className="footer__links">
                                {column.links.map((link, i) => (
  <li key={i}>
    <NavLink
      to={link.url}
      className={({ isActive }) =>
        isActive ? "footer__link active" : "footer__link"
      }
    >
      {link.name}
    </NavLink>
  </li>
))}

                            </ul>
                        </div>
                    ))}
                    </div>

                    <div className="footer__column footer__column--contacts">
                        <h4 className="footer__column-title">{footerData.contacts.title}</h4>
                        <div className="contact-info">
                            <div className="contact-info__phones">
                                <a href={`tel:${footerData.contacts.phones[0]}`}>{footerData.contacts.phones[0]}</a>
                                <span>|</span>
                                <a href={`tel:${footerData.contacts.phones[1]}`}>{footerData.contacts.phones[1]}</a>
                            </div>
                            <p>{footerData.contacts.address}</p>
                        </div>
                        <div className="social-icons">
                            {footerData.contacts.socials.map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="footer__divider" />

                <div className="footer__bottom">
                    <p>{footerData.bottomText}</p>
                </div>

                <button onClick={scrollToTop} className="scroll-to-top">
                    <FiArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;