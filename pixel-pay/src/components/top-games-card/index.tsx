// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";

export default function TopCardGames({ topGames }) {
  const navigate = useNavigate();

  const viewGame = (categorias_id: number) => {
    navigate(`/category/${categorias_id}`, { state: { categoryId: 1 } });
  };

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
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
        loop
      >
        {topGames.slice(0, 10).map((topGame, index) => (
          <SwiperSlide key={index}>
            <div
              className="top-game-card"
              onClick={() => viewGame(topGame.categorias_id)}
            >
              <img
                className="top-game-image"
                src={topGame.link.split(" ")[0]}
                alt=""
              />
              <p className="top-game-name">{topGame.nome}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
