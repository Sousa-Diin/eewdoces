import { Router } from "express";
import OrderProductRepository from "../repository/OrderProductRepository.js";

const router = Router();

router.get('/', async (req,res) => {

  try {
    const selectAllOrderProduct = await new OrderProductRepository().getAll();
    res.status(200).send(selectAllOrderProduct);
    
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
  
});

export default router;