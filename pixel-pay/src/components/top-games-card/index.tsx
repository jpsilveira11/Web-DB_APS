// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";

export default function TopCardGames({ topGames }) {
  // const { content } = _prop;

  // if (!content || !content.link) {
  //   return null;
  // }

  // const link = content.link.split(" ")[0];

  console.log("topGames", topGames.slice(0, 10));

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
            <div className="top-game-card">
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
      {/* <Card className="bg-dark text-white">
        <Card.Img src={link} alt={content.nome} />
        <Card.ImgOverlay>
          <Card.Text>{content.nome}</Card.Text>
        </Card.ImgOverlay>
      </Card> */}
    </>
  );
}
