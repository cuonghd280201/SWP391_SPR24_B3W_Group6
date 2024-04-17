import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HomeSlider() {
  return (
    <Swiper
      modules={[ Autoplay,Pagination]}
      spaceBetween={15}
      slidesPerView={3}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{dynamicBullets: true }}
    >
      <SwiperSlide>
        <img src="https://i.pinimg.com/736x/de/2e/36/de2e36b9032d9ae47d4a9c4db42ce6d2.jpg" style={{ width: '100%', height: '300px'}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://thegapdecaders.com/wp-content/uploads/2023/09/BeautifulSwedenFI.jpg"style={{ width: '100%', height: '300px' }}  />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://media.vietravel.com/images/news/da-lat_1.jpg" style={{ width: '100%', height: '300px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://as1.ftcdn.net/v2/jpg/05/31/52/38/1000_F_531523803_8xWSasg2v4LrQUeEkMshkiSHWq2CDh3n.jpg" style={{ width: '100%', height: '300px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.openart.ai/stable_diffusion/8a41e3e40da9895b43bb77d39949c0c47cdee3e6_2000x2000.webp" style={{ width: '100%', height: '300px' }} />
      </SwiperSlide>
    </Swiper>
  );
}
