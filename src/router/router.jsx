import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Delivery from "../pages/Delivery/Delivery"
import Home from '../pages/Home/Home'
import Payment from "../pages/PayMent/Payment";
import Return from "../pages/Return/Return";
import AboutUs from "../pages/Aboutus/Aboutus";
import News from "../pages/News/News";
import Details from "../pages/Details/Details"
import Login from '../pages/Auth/Login'
import Cart from '../pages/Cart/Cart'
import Favorites from '../pages/Favorites/Favorites'
import Catalog from "../pages/Catalog/Catalog";
import Restore from "../pages/Restore/Restore";
import Registration from "../pages/Register/Register";
import RegisterFormGoogle from "../pages/Register/RegisterFormGoogle";
import Profile from "../pages/Profile/Profile";
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