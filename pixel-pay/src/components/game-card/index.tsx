import { useNavigate } from "react-router-dom";
import "./index.css";
import GamesData from "../../types/GamesData";

export default function GameCard({ gameData, showCategory }) {
  const navigate = useNavigate();

  if (!gameData || !gameData.link) {
    return null;
  }

  const goToGameDetail = ({ JogosId, categorias_id }: GamesData) => {
    // window.location.href = `/game/${JogosId}`;
    navigate(`/game/${JogosId}`, {
      state: { gameId: JogosId, categoryId: categorias_id },
    });
  };

  return (
    <div className="game-card" onClick={() => goToGameDetail(gameData)}>
      <div className="game-card-image-wrapper">
        {showCategory && (
          <p className="game-card-category">{gameData.categorias_nome}</p>
        )}
        <img
          className="game-card-image"
          src={gameData.link.split(" ")[0]}
          alt={gameData.nome}
        />
        <div className="overlay"></div>
      </div>
      <p className="game-card-name">{gameData.nome}</p>
      <p className="game-card-description">{gameData.desenvolvedora}</p>
    </div>
  );
}
