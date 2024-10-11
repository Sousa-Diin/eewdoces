import { Router } from "express";
import OrdersRepository from "../repository/OrdersRepository.js";

const router = Router();

router.get('/', async (req,res) => {

  try {
    const selectAllOrders = await new OrdersRepository().getAll();
    res.status(200).send(selectAllOrders);
    
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
  
});

export default router;