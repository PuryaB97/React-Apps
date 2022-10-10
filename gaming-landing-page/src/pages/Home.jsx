import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

import {
  Welcome,
  Champion,
  ChampionDetail,
  Trailer,
  Credit,
} from "../components/home-section";

import { championsData } from "../assets/dummy";

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Trailer isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      {championsData.map((item, index) => (
        <ChampionDetail key={index} item={item} id={index} />
      ))}
    </>
  );
};

export default Home;
