import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Styles must use direct files imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { BANNER_ITEMS } from '../../../constants';

import './banner.scss';

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      navigation
      pagination={{ clickable: true }}
      className="swiper"
    >
      {BANNER_ITEMS.map(({ img }) => {
        let cardImgUrl = null;
        try {
          cardImgUrl = require(`../../../assets/media/${img}`);
        } catch (error) {
          console.error(error);
        }
        return (
          <SwiperSlide key={img}>
            <LazyLoadImage src={cardImgUrl} className="banner_img" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
