import { Carousel, Image } from 'react-bootstrap'
import './carousel.css'

interface PropsCarousel {
    paths: string[];
}  

function ControlCarousel({ paths }: PropsCarousel){
    return (
        <>
            <Carousel className="w-100 h-75 fixed-top ">
                {
                    paths.map((path, index) => (
                        <Carousel.Item  key={index}>
                            <Image  className='d-block w-100 h-100 carousel-img'
                                src={path} 
                                alt={`Imagem ${index + 1}`} 
                                />
                        </Carousel.Item>
                      ))
                }

            </Carousel>
        </>
    )
}

export default ControlCarousel;