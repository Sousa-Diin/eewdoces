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

router.get('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params;
  console.log('C')
  console.log(`IP1: ${id1} \nIP2: ${id2}`);
  try {
    const result = await new OrdersRepository().getBy2Id(id1, id2);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error fetching order:', error);  // Log do erro para depuração
    res.status(500).send({ error: 'An error occurred while fetching the order' });
  }
});

export default router;