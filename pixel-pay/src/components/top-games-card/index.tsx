// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import GamesData from "../../types/GamesData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";

export default function TopCardGames({ topGames }) {
  const navigate = useNavigate();

  const goToGameDetail = ({ JogosId, categorias_id }: GamesData) => {
    navigate(`/game/${JogosId}`, {
      state: { gameId: JogosId, categoryId: categorias_id },
    });
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
              onClick={() => goToGameDetail(topGame)}
            >
              <img
                className="top-game-image"
                src={topGame.link.split(" ")[0]}
                alt={topGame.nome}
              />
              <p className="top-game-name">{topGame.nome}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
