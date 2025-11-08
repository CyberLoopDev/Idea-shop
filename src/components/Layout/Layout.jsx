import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Aside from "./Aside/Aside.jsx";
import "../../index.css";



const Layout = () => {

    const pathes = ['/aboutus', '/news', '/details', '/payment', '/delivery', '/return', '/favorites', '/profile', '/cart', '/registration', '/restore', '/register_google', '/login', '/orders'];

    const location = useLocation();
    const isPage = pathes.includes(location.pathname) ? false : true;

     
  return (
   
    <div className="layout">
      
      <header className="header-grid">
          <Header />
      </header>

      <div className="main-wrapper">
        <div className="container content-layout">
          <div className="aside-border">
            {
              isPage && <Aside />
              
            }
         </div>
         <main className="main">
            <Outlet />
         </main>
        </div>
      </div>

      <footer className="footer-border">
        
          <Footer />
     
      </footer>
       
    </div>
   
  );
};

export default Layout;
