import express from 'express';
import cors from "cors";
import mysql from 'mysql2';
import { performance } from 'perf_hooks';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'pixelplay',
    password: 'password',
    database: 'loja'
  });

const chalk = require('chalk');
// Iniciar o servidor
const startTime = performance.now();
const app = express();
app.use(cors());
app.use(express.json());

const port = 5174;

app.get('/', (req, res) => {
  connection.query('SELECT * FROM jogos', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar dados');
    } else {
      //console.table(results);
      const jsonString = JSON.stringify(results, null, 2);

      res.set('Content-Type', 'application/json');
      res.send(jsonString);
    }
  });
});

app.get('/tabela/:nometabela', (req, res) => {
  const { nometabela } = req.params;

  connection.query(`SELECT * FROM ${nometabela}`, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar dados');
    } else {
      const data = {
        tabela: nometabela,
        resultados: results
      };

      const jsonString = JSON.stringify(data, null, 2);

      res.set('Content-Type', 'application/json');
      res.send(jsonString);
    }
  });
});

connection.query('SELECT VERSION() AS version', (error, results) => {
  if (error) {
    console.error('Erro ao obter a versão do MySQL:', error);
    return;
  }

  let version: string = '';

  if (Array.isArray(results) && results.length > 0) {
    const versionResult = results[0];
    if ('version' in versionResult) {
      version = versionResult.version;
    }
  }

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  app.listen(port, () => {
    console.log(chalk.bold.green(`\n  MYSQL`),chalk.dim.green(`v${version}`),chalk.dim(`ready in ${executionTime.toFixed(0)} ms \n`));
    console.log(chalk.green('  ➜ '),chalk.bold("Local:  ") ,chalk.cyanBright(`http://localhost:${chalk.bold(port)}/\n`));
  });
  
});
  

export {connection, app}

