import "./index.css"
import { useState, useEffect } from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import ContainerHeader from "../../components/container-header/index.tsx";
import words from "../../assets/text-welcome.json"
import Card from "../../components/card/index.tsx";

import axios from 'axios';

function App() {

    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5174/api/jogos/')
        .then(response => {
              setJogos(response.data);
        })
        .catch(error => {
          console.error(error)
        })
    }, [])
  
    return (
      <>{
        jogos.map(jogo =>
          <Card content={jogo}></Card>
          )
      }
       
      </>
    )
  }


export default function Welcome(){

    return (
        <>
            <ContainerHeader color="transparent" className="text-uppercase text-color-white trigo" >
                <div className="text-bold text-large">PIXEL PLAY</div>
                <div className="nav">
                    <MdOutlineAccountCircle className="btn-icon"/>
                    <div className="btn-secondary">{words.header}</div>
                </div> 
            </ContainerHeader>
           <App></App>
        </>   
    )

}