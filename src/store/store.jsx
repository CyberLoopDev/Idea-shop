import { Children, createContext } from "react";

import categoryImg1 from '../assets/1.webp'; 
import categoryImg2 from '../assets/2.webp';
import categoryImg3 from '../assets/3.webp';
import categoryImg4 from '../assets/4.webp';
import categoryImg5 from '../assets/5.webp';
import categoryImg6 from '../assets/6.webp';
import categoryImg7 from '../assets/7.webp';
import categoryImg8 from '../assets/8.webp';
import categoryImg9 from '../assets/9.webp';
import categoryImg10 from '../assets/10.webp';
import categoryImg11 from '../assets/11.webp';
import categoryImg12 from '../assets/12.webp';
import categoryImg13 from '../assets/13.webp';
import categoryImg14 from '../assets/14.webp';
import promoMain1 from '../assets/banner-1.png';
import promoMain2 from '../assets/banner-2.png';
import { FaOdnoklassniki, FaStar, FaVk,  } from "react-icons/fa";
import {FiStar } from 'react-icons/fi'
import popularTop from '../assets/top.webp';
import popularBear from '../assets/bear.webp';
import popularDino from '../assets/toy.webp';
import ideaLogo from '../assets/idea-logo.png'; 

export const CustomContext = createContext()



export const ContextProvider = ({ children}) => {
   
const categoriesData = {
    title: "Популярные категории", 
   items: [
    { id: 1, name: "Для девочек", image: categoryImg1, url: "/products/girls" },
    { id: 2, name: "Для мальчиков", image: categoryImg2, url: "/products/boys" },
    { id: 3, name: "Для новорожденных", image: categoryImg3, url: "/products/newborn" },
    { id: 4, name: "Канцелярия", image: categoryImg4, url: "/products/stationery" },
    { id: 5, name: "Аксессуары", image: categoryImg5, url: "/products/accessories" },
    { id: 6, name: "Спорт", image: categoryImg6, url: "/products/sport" },
    { id: 7, name: "Настольные игры", image: categoryImg7, url: "/products/board-games" },
    { id: 8, name: "Коляски", image: categoryImg8, url: "/products/strollers" },
    { id: 9, name: "Развитие", image: categoryImg9, url: "/products/learning" },
    { id: 10, name: "Конструкторы", image: categoryImg10, url: "/products/constructors" },
    { id: 11, name: "Хиты", image: categoryImg11, url: "/products/hits" },
    { id: 12, name: "Новинки", image: categoryImg12, url: "/products/new" },
    { id: 13, name: "Акции", image: categoryImg13, url: "/products/sale" },
    { id: 14, name: "Популярное", image: categoryImg14, url: "/products/popular" },
  ]
};


const promoBannersData = [
    {
        id: 1,
        title: "Выбираем\nпрофессию\nмечты",
        subtitle: "Детские товары для игр и творчества",
        backgroundImage: promoMain1, 
        url: "/catalog/toys"
    },
    {
        id: 2,
        title: "Товары\nдля любимого\nмалыша",
        subtitle: "С заботой о самом важном",
        backgroundImage: promoMain2, 
        url: "/catalog/baby"
    }
];

const sidebarData = {
    categories: [
        { name: "Для девочек", url: "/catalog/girls" },
        { name: "Для мальчиков", url: "/catalog/boys" },
        { name: "Для новорожденных", url: "/catalog/newborn" },
        { name: "Канцелярия", url: "/catalog/stationery" },
        { name: "Аксессуары", url: "/catalog/accessories" },
        { name: "Спорт", url: "/catalog/sport" },
        { name: "Настольные игры", url: "/catalog/board-games" },
        { name: "Коляски", url: "/catalog/strollers" },
        { name: "Развитие", url: "/catalog/development" },
        { name: "Конструкторы", url: "/catalog/constructors" },
        { name: "Хиты", url: "/catalog/hits" },
        { name: "Новинки", url: "/catalog/new" },
        { name: "Акции", url: "/catalog/sale" },
        { name: "Популярное", url: "/catalog/popular" },
    ],
    socials: [
        { name: "Odnoklassniki", url: "https://ok.ru/your_group", icon: <FaOdnoklassniki /> },
        { name: "Custom", url: "#", icon: <FaStar /> },
        { name: "VK", url: "https://vk.com/your_group", icon: <FaVk /> },
    ],
    popularProducts: [
        { id: 201, name: "Топ", price: "6 600 ₽", image: popularTop, url: "/product/201" },
        { id: 202, name: "Медвежонок", price: "990 ₽", image: popularBear, url: "/product/202" },
        { id: 203, name: "Динозавр", price: "1 990 ₽", image: popularDino, url: "/product/203" },
    ]
};

// Бул кодду Store компонентинин ичине, башка data'лардын жанына кой
const footerData = {
    logo: ideaLogo,
    columns: [
        {
            title: "Компания",
            links: [
                { name: "О нас", url: "/about" },
                { name: "Новости", url: "/news" },
                { name: "Реквизиты", url: "/details" },
            ]
        },
        {
            title: "Сервис",
            links: [
                { name: "Оплата", url: "/payment" },
                { name: "Доставка", url: "/delivery" },
                { name: "Обмен и возврат", url: "/returns" },
            ]
        }
    ],
    contacts: {
        title: "Контакты",
        phones: ["+7 (800) 800-80-80", "+7 (800) 800-80-80"],
        address: "г. Москва, 1-я Тверская-Ямская улица, дом 2",
        socials: [
            { name: "Odnoklassniki", url: "https://ok.ru", icon: <FaOdnoklassniki /> },
            { name: "Custom", url: "#", icon: <FiStar /> },
            { name: "VK", url: "https://vk.com", icon: <FaVk /> },
        ]
    }
};
    const value = {
categoriesData,
promoBannersData,
sidebarData,
footerData
    }

    return <CustomContext.Provider value={value}>
            {children}
    </CustomContext.Provider>

  

}