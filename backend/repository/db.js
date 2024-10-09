import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });  //ajuste do caminho [BUG] corrigir e configurar arquivo dotenv(env) #16

import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});


export default pool;