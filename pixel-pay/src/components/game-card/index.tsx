import "./index.css";

export default function GameCard({ gameData, showCategory }) {
  if (!gameData || !gameData.link) {
    return null;
  }

  return (
    <div className="game-card">
      <div className="game-card-image-wrapper">
        {showCategory && (
          <p className="game-card-category">{gameData.categorias_nome}</p>
        )}
        <img
          className="game-card-image"
          src={gameData.link.split(" ")[0]}
          alt=""
        />
        <div className="overlay"></div>
      </div>
      <p className="game-card-name">{gameData.nome}</p>
      <p className="game-card-description">{gameData.desenvolvedora}</p>
    </div>
  );
}
