import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Delivery from "../pages/Delivery/Delivery"
import Home from '../pages/Home/Home'
import Payment from "../pages/PayMent/Payment";
import Return from "../pages/Return/Return";
import AboutUs from "../pages/Aboutus/Aboutus";
import News from "../pages/News/News";
import Details from "../pages/Details/Details"
import Profile from '../pages/Profile/Profile'
import Cart from '../pages/Cart/Cart'
import Favorites from '../pages/Favorites/Favorites'
import Catalog from "../pages/Catalog/Catalog";
import Restore from "../pages/Restore/Restore";
import Registration from "../pages/Register/Register";
import RegisterFormGoogle from "../pages/Register/RegisterFormGoogle";
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
                { element: <News />, path: "news" },
                { element: <Details />, path: "details" },
                { element: <Profile />, path: "profile" },
                { element: <Cart />, path: "cart"} ,
                { element: <Favorites />, path: "favorites" },
                { element: <Restore />, path: "restore" },
                { element: <Registration />, path: "registration" },
                { element: <RegisterFormGoogle />, path: 'register_google' },

        ]
    }
])  