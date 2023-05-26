interface GameData {
  JogosId: number;
  nome: string;
  lancamento: string;
  desenvolvedora: string;
  descricao: string;
  plataforma_lancada: number;
  link: string;
  jogos_id: number;
  categorias_id: string;
  categorias_nome: string;
}

export default interface PropsTopGames {
  gameData: GameData;
}
