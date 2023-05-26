interface CarouselData {
  name: string;
  image: string;
  description: string;
}

export default interface PropsCarousel {
  carouselData: CarouselData[];
}
