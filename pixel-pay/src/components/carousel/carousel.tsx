import { Carousel, Image } from "react-bootstrap";
import "./carousel.css";

import PropsCarousel from "../../types/PropsCarousel";

function ControlCarousel({ carouselData }: PropsCarousel) {
  return (
    <>
      <Carousel>
        {carouselData.map((carousel, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block w-100 carousel-img"
              src={carousel.image}
              alt={`Imagem ${index + 1}`}
            />
            {/* <Carousel.Caption>
              <h3>{carousel.name}</h3>
              <p>{carousel.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ControlCarousel;
