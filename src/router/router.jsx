import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Delivery from "../pages/Delivery/Delivery.jsx"
import Home from '../pages/Home/Home.jsx'
import Payment from "../pages/Payment/Payment.jsx";
import Return from "../pages/Return/Return.jsx";
import AboutUs from "../pages/Aboutus/Aboutus.jsx";
import News from "../pages/News/News.jsx";
import Details from "../pages/Details/Details.jsx"
import Login from '../pages/Auth/Login.jsx'
import Cart from '../pages/Cart/Cart.jsx'
import Favorites from '../pages/Favorites/Favorites.jsx'
import Catalog from "../pages/Catalog/Catalog.jsx";
import Restore from "../pages/Restore/Restore.jsx";
import Registration from "../pages/Register/Register.jsx";
import RegisterFormGoogle from "../pages/Register/RegisterFormGoogle.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute.jsx";
import Orders from "../pages/Orders/Orders.jsx";
import ProductMoreInfo from "../components/ProductMoreInfo/ProductMoreInfo.jsx";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        path: '/',
        children: [
        
                { element: <Home />, path: ""},
                { element: <Catalog />, path: 'catalog' },
                { element:  <Delivery />, path: "delivery" },
                { element: <Payment />, path: "payment" },
                { element: <Return />, path: "return" },
                { element: <AboutUs />, path: "aboutus" },
               { element: <News />, path: 'news' },    
                { element: <Details />, path: "details" },
                { element: <Login />, path: "login" },
                { element: <Cart />, path: "cart"} ,
                { element: <Favorites />, path: "favorites" },
                { element: <Restore />, path: "restore" },
                { element: <Registration />, path: "registration" },
                { element: <RegisterFormGoogle />, path: 'register_google' },
                { element: <PrivateRoute><Profile /></PrivateRoute>, path: "profile" },
                { element: <PrivateRoute><Orders /></PrivateRoute>, path: 'orders' },
                { element: <ProductMoreInfo />, path: '/product/:id' }

        ]
    }
])  