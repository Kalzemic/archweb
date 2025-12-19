import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "../Styles/ServicesPage.css";

export default function ServicesPage() {
  const services = [
    { url: "landing-pages", name: "דפי נחיתה" },
    { url: "interactive-websites", name: "אתרים אינטראקטיביים" },
    { url: "web-applications", name: "אפליקציות רשת" },
    { url: "automation-tools", name: "כלי אוטומציה" },
    { url: "ai-agents", name: "סוכני AI" },
  ];

  return (
    <div className="services-page">
      <Swiper
        modules={[Autoplay]}
        height={1000}
        slidesPerView={3}
        spaceBetween={40}
        speed={2000}
        loop
        centeredSlides
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
      >
        {services.map((service) => (
          <SwiperSlide key={service.url}>
            <div className="service-card">
              <img className='service-img'src={`/services/${service.url}.png`} alt={service.name}/>
              <h2>{service.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
