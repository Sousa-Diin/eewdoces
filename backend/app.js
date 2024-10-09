import 'dotenv/config';
import express from 'express';
import pool from '../backend/repository/db.js';

const app = express();
const port = 4001;

app.get('/', async (req,res) => {
  const table = req.query.table;
  const allowedTables = ['people','products','order_product','orders','transactions'];


  if(!allowedTables.includes(table)){
    return res.status(400).send('Tabela inválida');
  }
  
  const textQuery = `SELECT * FROM ${table}`;

  try {
    const results = (await pool.query(textQuery)).rows
    res.status(200).send(results);
    
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
  
});


app.listen(port, '0.0.0.0', () => {
  console.log('API da E&WDoces está online.');
});
