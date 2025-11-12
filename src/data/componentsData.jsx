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
import promoMain1 from '../assets/banner-1.png';
import promoMain2 from '../assets/banner-2.png';
import { FaOdnoklassniki, FaStar, FaVk,  } from "react-icons/fa";
import { FiStar,FiTruck, FiGift, FiMapPin } from "react-icons/fi";
import popularTop from '../assets/top.webp';
import popularBear from '../assets/bear.webp';
import popularDino from '../assets/toy.webp';
import ideaLogo from '../assets/idea-logo.png';
import partnerLogo1 from '../assets/partnerLogo1.jpg'; 
import partnerLogo2 from '../assets/partnerLogo2.jpg';
import partnerLogo3 from '../assets/partnerLogo3.jpg';
import partnerLogo4 from '../assets/partnerLogo4.jpg';
import partnerLogo5 from '../assets/partnerLogo5.jpg'; 
import news1 from '../assets/news1.webp'
import news2 from '../assets/news2.webp'
import news3 from '../assets/news3.webp'



export const categoriesData = {
  items: [
    { name: "Для девочек", url: "/catalog/girls", image: categoryImg1 },
    { name: "Для мальчиков", url: "/catalog/boys", image: categoryImg2 },
    { name: "Для новорожденных", url: "/catalog/newborn", image: categoryImg3 },
    { name: "Канцелярия", url: "/catalog/stationery", image: categoryImg4 },
    { name: "Аксессуары", url: "/catalog/accessories", image: categoryImg5 },
    { name: "Спорт", url: "/catalog/sport", image: categoryImg6 },
    { name: "Настольные игры", url: "/catalog/board-games", image: categoryImg7 },
    { name: "Коляски", url: "/catalog/strollers", image: categoryImg8 },
    { name: "Развитие", url: "/catalog/development", image: categoryImg9 },
    { name: "Конструкторы", url: "/catalog/constructors", image: categoryImg10 },
    { name: "Хиты", url: "/catalog/hits", image: categoryImg11 },
    { name: "Новинки", url: "/catalog/new", image: categoryImg12 },
    { name: "Скидки", url: "/catalog/sale", image: categoryImg13 },
  ]
};

export const promoBannersData = [
    {
        id: 1,
        title: "Выбираем\nпрофессию\nмечты",
        subtitle: "Детские товары для игр и творчества",
        backgroundImage: promoMain1, 
        url: "/catalog/development"
    },
    {
        id: 2,
        title: "Товары\nдля любимого\nмалыша",
        subtitle: "С заботой о самом важном",
        backgroundImage: promoMain2, 
        url: "/catalog/newborn"
    }
];

export const sidebarData = {
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

export const footerData = {
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
                { name: "Обмен и возврат", url: "/return" },
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
            { name: "VK", url:"https://vk.com", icon: <FaVk /> },
        ]
    }
};

export const featuresData = {
    items: [
        {
            icon: <FiTruck />,
            text: "Быстрая доставка"
        },
        {
            icon: <FiGift />,
            text: "Акции и бонусы"
        },
        {
            icon: <FiMapPin />,
            text: "Шоурум в центре"
        }
    ]
};

export const partnersData = {
    title: "Наши партнеры",
    partners: [ 
        { id: 1, name: "Rainbow", logo: partnerLogo1 },
        { id: 2, name: "AL", logo: partnerLogo2 },
        { id: 3, name: "Turboo", logo: partnerLogo3 },
        { id: 4, name: "Partner 4", logo: partnerLogo4 },
        { id: 5, name: "Saturn", logo: partnerLogo5 },
        { id: 6, name: "Rainbow", logo: partnerLogo1 }, 
    ]
};

export const filterOptionsData = {
  title: "Каталог",
  filters: [
    { id: 'sort', name: 'Сортировка', options: ['По умолчанию', 'Сначала дешевле', 'Сначала дороже'] },
    { id: 'price', name: 'Цена', options: ['До 1000 ₽', '1000-5000 ₽', 'От 5000 ₽'] },
    { id: 'color', name: 'Цвет', options: ['Красный', 'Синий', 'Зеленый', 'Черный'] },
    { id: 'country_of_origin', name: 'Страна', options: ['Кыргызстан', 'Китай', 'Россия', "Германия", "Турция"] },
    { id: 'tags', name: 'Метка', options: ['Новинка', 'Хит', 'Скидка'] },
    { id: 'category', name: 'Категория', options: ['Для девочек', 'Для мальчиков', 'Для новорожденных', 'Канцелярия', 'Аксессуары', 'Спорт', 'Настольные игры', 'Коляски', 'Развитие', 'Конструкторы'] },
    { id: 'material', name: 'Материал', options: ["Пластик", "Дерево", "Картон", "Пластик и текстиль", "Текстиль", "Алюминий и текстиль", "Алюминий"]}
  ]
};


export const newsItems = [
  {
    id: 1,
    date: '31.07.25',
    title: 'Плюсы и минусы школьной формы',
    description: 'Третья статья вашего блога.',
    tags: ['#Детская одежда', '#Выбор одежды', '#Одежда для девочек'],
    image: news1
  },
  {
    id: 2,
    date: '08.08.25',
    title: 'Первая одежда для малышей',
    description: 'А это уже вторая новость в интернет-магазине.',
    tags: ['#Детская одежда', '#Стирка', '#Уход'],
    image: news2,
  },
  {
    id: 3,
    date: '21.09.25',
    title: 'Здоровое питание для подростков',
    description: 'Поздравляем! Это первая новость в интернет-магазине.',
    tags: ['#Детская одежда', '#Выбор одежды', '#Качество'],
    image: news3,
  },
];
