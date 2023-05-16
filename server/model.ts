import express from 'express';
import cors from "cors";
import { connection } from './config';

const chalk = require('chalk');
// Iniciar o servidor
const startTime = performance.now();
const app = express();
app.use(cors());
app.use(express.json());

const endTime = performance.now();
const executionTime = endTime - startTime;

const port = 5174;
app.listen(port, () => {
  console.log(chalk.bold.green('\n  MYSQL '),chalk.dim(`Ready in ${executionTime.toFixed(0)} ms \n`));
  console.log(chalk.bold.green('  ➜ '),chalk.bold("Local: ") ,chalk.cyanBright(`http://localhost:${chalk.bold(port)}/\n`));
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

