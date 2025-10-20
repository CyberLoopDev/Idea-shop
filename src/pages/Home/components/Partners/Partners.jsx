import { partnersData } from '../../../../data/componentsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Partners.css';

const Partners = () => {
    

    return (
        <section className="partners-section">
            <div className="container">
                <div className="partners-header">
                    <h2 className="section-title">{partnersData.title}</h2>
                    <div className="partners-swiper-nav">
                        <div className="partners-swiper-prev">←</div>
                        <div className="partners-swiper-next">→</div>
                    </div>
                </div>

                <div className="partners-slider-wrapper">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.partners-swiper-next',
                            prevEl: '.partners-swiper-prev',
                        }}
                        spaceBetween={20}
                        slidesPerView={5}
                        loop={true}
                        className="partners-swiper"
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 15 },
                            576: { slidesPerView: 3, spaceBetween: 20 },
                            768: { slidesPerView: 4, spaceBetween: 20 },
                            992: { slidesPerView: 5, spaceBetween: 20 },
                        }}
                    >
                        {partnersData.partners.map((partner) => (
                            <SwiperSlide key={partner.id}>
                                <div className="partner-logo">
                                    <img src={partner.logo} alt={partner.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Partners;