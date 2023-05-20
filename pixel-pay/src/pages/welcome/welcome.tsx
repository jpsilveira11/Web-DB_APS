import "./index.css"
import { useState, useEffect } from 'react';
import { NavbarWelcome }from "../../components/navbar/navbar.tsx";
import Card from "../../components/card/card.tsx";
import axios from 'axios';
import ControlCarousel from "../../components/carousel/carousel.tsx";

function App() {

    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        axios.get('/api/jogos/')
        .then(response => {
              setJogos(response.data);
        })
        .catch(error => {
          console.error(error)
        })
    }, [])
  
    return (
      <>{
        jogos.map((jogo, index) =>
          <Card key={index} content={jogo}></Card>
          )
      }
       
      </>
    )
  }

function CarouselCurrent(){

  const paths = [];

  for (let i = 1; i <= 5; i++) {
    const imagePath = `/img/carousel/id-${i}.jpg`;
    paths.push(imagePath);
  }

  return(
    <>
      <ControlCarousel paths={paths}/>
    </>
  )
}


export default function Welcome(){

    return (
        <>
            <NavbarWelcome/>
            <CarouselCurrent/>
        </>   
    )

}