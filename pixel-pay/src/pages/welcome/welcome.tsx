import "./index.css"
import { useState, useEffect } from 'react';
import ContainerHeader from "../../components/navbar/navbar.tsx";
import words from "../../assets/text-welcome.json"
import Card from "../../components/card/card.tsx";
import axios from 'axios';
import Carousel from "../../components/carousel/carousel.tsx";

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
    const imagePath = `/images/carousel/id-${i}.jpg`;
    paths.push(imagePath);
  }

  return(
    <>
      <Carousel paths={paths}/> 
    </>
  )
}


export default function Welcome(){

    return (
        <>
            <ContainerHeader>
                <div className="text-bold text-large">PIXEL PLAY</div>
                <div className="nav">
                    <div className="btn-secondary">{words.header}</div>
                </div> 
            </ContainerHeader>
            <CarouselCurrent/>
           <App></App>
        </>   
    )

}