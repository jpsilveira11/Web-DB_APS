import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import GamesData from "../../types/GamesData";

import Container from "react-bootstrap/Container";
import GameCard from "../../components/game-card";

import "./index.css";

export default function ViewGame() {
  const { state } = useLocation();
  const { gameId, categoryId } = state;
  const [game, setGame] = useState<GamesData>({} as GamesData);
  const [gamesIncategory, setGamesInCategory] = useState<GamesData[]>([]);

  useEffect(() => {
    const getGameById = async () => {
      try {
        console.log("categoryId", state);
        const response = await axios.get("/api/categorias/");
        setGame(
          response.data.resultados.find(
            (game: GamesData) => game.JogosId === gameId
          )
        );
        setGamesInCategory(
          response.data.resultados.filter(
            (gameInCategory: GamesData) =>
              gameInCategory.categorias_id === categoryId
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    getGameById();
  }, []);

  if (!game || !game.link) {
    return null;
  }

  return (
    <div className="game-datails-wrapper">
      <Container>
        <h1 className="game-title">{game.nome}</h1>

        <div className="games-details">
          <div className="my-4">
            <p className="games-details-description">{game.descricao}</p>

            <div className="game-details-informations">
              <div className="mb-10">
                <p className="details-title">Desenvolvedora</p>
                <span className="details-value">{game.desenvolvedora}</span>
              </div>

              <div className="mb-10">
                <p className="details-title">Data lançamento</p>
                <span className="details-value">{game.lancamento}</span>
              </div>

              <div className="mb-10">
                <p className="details-title">Categoria</p>
                <span className="details-value">{game.categorias_nome}</span>
              </div>
            </div>
          </div>

          <img
            className="game-details-image"
            src={game.link.split(" ")[0]}
            alt={game.nome}
          />
        </div>
      </Container>
    </div>
  );
}
