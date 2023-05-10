import mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'pixelplay',
    password: 'password',
    database: 'loja'
  });

