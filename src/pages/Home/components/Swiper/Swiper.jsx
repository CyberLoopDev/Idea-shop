import { categoriesData } from '../../../../data/componentsData';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swiper.css';
import { CustomContext } from '../../../../store/store'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CategoriesSlider = () => {
    

    if (!categoriesData) return null;

    return (
        <section className="categories-section">
            <div className="container">
                <div className="slider-header">
                    <h2 className="section-title">{categoriesData.title}</h2>
                </div>
                <div className="slider-wrapper">
                    <Swiper
                    
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        spaceBetween={30}
                        slidesPerView={4}
                        loop={true}
                        className="categories-swiper"
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 20 },
                            576: { slidesPerView: 2, spaceBetween: 20 },
                            992: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                    >
                        {categoriesData.items.map((category) => (
                            <SwiperSlide key={category.id}>
                                <Link to={category.url} className="category-card">
                                    <div className="category-card__image-wrapper">
                                        <img src={category.image} alt={category.name} />
                                    </div>
                                    <p className="category-card__name">{category.name}</p>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    <div className="swiper-button-prev-custom">
                        <IoIosArrowBack />
                    </div>
                    <div className="swiper-button-next-custom">
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSlider;