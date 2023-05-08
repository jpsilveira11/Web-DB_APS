import mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'pixelpay',
    password: 'password',
    database: 'loja'
  });

