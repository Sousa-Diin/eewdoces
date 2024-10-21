import { Router } from "express";
import TransactionsRepository from "../repository/TransactionsRepository.js";

const router = Router();

router.get('/', async (req,res) => {

  try {
    const selectAllTransactions = await new TransactionsRepository().getAll();
    res.status(200).send(selectAllTransactions);
    
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
  
});

export default router;