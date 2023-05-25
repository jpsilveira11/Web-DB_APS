// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import CategoryCard from "../category-card";
import PropsCategories from "../../types/PropsCategories";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";

export default function Categories({ categories }: PropsCategories) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={1.4}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
      navigation
      pagination={{
        clickable: true,
      }}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <CategoryCard randomnumber={index}>
            <p className="mb-0">{category.categorias_nome}</p>
          </CategoryCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
