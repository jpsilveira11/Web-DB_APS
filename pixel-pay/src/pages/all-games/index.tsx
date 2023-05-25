import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GameCard from "../../components/game-card";

import Container from "react-bootstrap/Container";

import GamesData from "../../types/GamesData";

import "./index.css";

export default function AllGames() {
  const { state } = useLocation();

  const [games, setGames] = useState<GamesData[]>([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get("/api/categorias/");
        setGames(response.data.resultados);
      } catch (error) {
        console.error(error);
      }
    };

    getGames();
  }, []);

  return (
    <div className="default-spacer">
      <Container>
        <h1>Todos os jogos</h1>

        <div className="game-cards">
          {games.map((game) => (
            <GameCard gameData={game} showCategory={true} />
          ))}
        </div>
      </Container>
    </div>
  );
}
