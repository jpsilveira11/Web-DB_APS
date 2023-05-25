import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import GameCard from "../../components/game-card";

import GamesData from "../../types/GamesData";

import Container from "react-bootstrap/Container";

import "./index.css";

export default function GamesByCategory() {
  const { state } = useLocation();
  const { categoryId, categoryName } = state;
  const [games, setGames] = useState<GamesData[]>([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get("/api/categorias/");
        setGames(
          response.data.resultados.filter(
            (game: GamesData) => game.categorias_id === categoryId
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    getGames();
  }, []);

  return (
    <div className="default-spacer">
      <Container>
        <h1>{categoryName}</h1>

        <div className="game-cards">
          {games.map((game) => (
            <GameCard gameData={game} showCategory={false} />
          ))}
        </div>
      </Container>
    </div>
  );
}
