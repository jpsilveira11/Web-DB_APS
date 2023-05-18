import { connection, app } from './config';

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

