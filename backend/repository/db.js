import pg from 'pg';
import 'dotenv/config.js';

const { Pool } = pg;

const pool = new Pool({
  host:'localhost',
  port: 5432,
  user: 'eewdoces',
  password:'E317035we',
  database: 'EEWDoces',
});

console.log((await pool.query('SELECT * FROM client')).rows);
console.log(`Dotenv: ${process.env.PASSWORD}`);


export default pool;