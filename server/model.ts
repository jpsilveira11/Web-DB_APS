import express from 'express';
import cors from "cors";
import { connection } from './config';

const app = express();
app.use(cors());
app.use(express.json());

// Iniciar o servidor
const port = 5174;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

app.get('/api/jogos', (req, res) => {

  const jogo = req.query.JogoId || null;

  if (!jogo){

    connection.query('SELECT * FROM jogos', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar dados');
      } else {
        res.json(results);
      }
    });

  }
  else { 
    connection.query('SELECT * FROM jogos WHERE JogosId = ?', [jogo], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar dados');
      } else {
        res.json(results);
      }
    });
    
  }
});

