import { connection, app } from "./config";

app.get("/api/jogos", (req, res) => {
  const jogo = req.query.JogoId || null;

  if (!jogo) {
    connection.query("SELECT * FROM jogos", (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar dados");
      } else {
        res.json(results);
      }
    });
  } else {
    connection.query(
      "SELECT * FROM jogos WHERE JogosId = ?",
      [jogo],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send("Erro ao buscar dados");
        } else {
          res.json(results);
        }
      }
    );
  }
});

app.get("/api/categorias/:categoria", (req, res) => {
  const { categoria } = req.params;

  if (!categoria) {
    return res.status(500).send("Erro ao buscar dados");
  }

  let sql = "";

  sql += "SELECT * ";
  sql += "FROM jogos j ";
  sql += "INNER JOIN jogos_categorias jc ON jc.jogos_id = j.JogosId ";
  sql += "INNER JOIN categorias c ON c.categorias_id = jc.categorias_id ";
  sql += "WHERE jc.categorias_id = ?";

  connection.query(sql, [categoria], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar dados");
    } else {
      const data = {
        resultados: results,
      };

      const jsonString = JSON.stringify(data, null, 2);

      res.set("Content-Type", "application/json");
      res.send(jsonString);
    }
  });
});

app.get("/api/categorias", (req, res) => {
  let sql = "";

  sql += "SELECT * ";
  sql += "FROM jogos j ";
  sql += "INNER JOIN jogos_categorias jc ON jc.jogos_id = j.JogosId ";
  sql += "INNER JOIN categorias c ON c.categorias_id = jc.categorias_id ";

  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar dados");
    } else {
      const data = {
        resultados: results,
      };

      const jsonString = JSON.stringify(data, null, 2);

      res.set("Content-Type", "application/json");
      res.send(jsonString);
    }
  });
});

// Defina a rota para criar um usuário
app.post("/api/usuarios", (req, res) => {
  const { nome, email, senha } = req.body;
  let sqlCheck = "SELECT * FROM usuario WHERE email = ?";
  connection.query(sqlCheck, [email], (error, results: any) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar dados");
    } else {
      if (results[0]) {
        return res.status(409).send(results);
      } else {
        // Execute a consulta SQL para inserir o usuário
        let sqlInsert =
          "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)";

        connection.query(sqlInsert, [nome, email, senha], (error, results) => {
          if (error) {
            console.error(error);
            res.status(500).send("Erro ao criar usuário");
          } else {
            res.status(200).send("Usuário criado com sucesso");
          }
        });
      }
    }
  });
});

app.get("/api/signin", (req, res) => {
  const { email, senha } = req.body;

  const sqlCheck = "SELECT * FROM usuario WHERE email = ? AND senha = ?";

  connection.query(sqlCheck, [email, senha], (error, results: any) => {
    if (error || !results) {
      console.error(error);
      res.status(500).send("Erro ao fazer login");
    } else {
      if (results) {
        const id = results[0].usuario_id;
        const name = results[0].nome;
        const sqlReturn =
          "SELECT * FROM assinatura_usuario WHERE usuario_id = ?";

        connection.query(sqlReturn, [id], (error, results: any) => {
          if (error || !results) {
            console.error(error);
            res.status(500).send("Erro ao fazer login");
          } else {
            const dadosUsuario = results[0];
            const data = {
              resultados: { ...dadosUsuario, email: email, nome: name },
            };

            const jsonString = JSON.stringify(data, null, 2);

            res.set("Content-Type", "application/json");
            res.send(jsonString);
          }
        });
      }
    }
  });
});

app.post("/api/subscription", (req, res) => {
  const { assinatura_id, usuario_id } = req.body;

  const sqlCheck =
    "INSERT INTO assinatura_usuario (assinatura_id, usuario_id) VALUES (? , ?)";

  connection.query(sqlCheck, [assinatura_id, usuario_id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao fazer assinatura");
    } else {
      res.status(200).send("Assinatura feita com sucesso!");
    }
  });
});
