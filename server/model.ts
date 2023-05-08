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

app.get('/api', (req, res) => {
  connection.query('SELECT * FROM jogos', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar dados');
    } else {
      res.json(results);
    }
  });
});