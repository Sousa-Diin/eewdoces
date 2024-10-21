import { Router } from "express";
import ProductsRepository from "../repository/ProductsRepository.js";

const router = Router();

router.get('/', async (req,res) => {

  try {
    const selectAllProducts = await new ProductsRepository().getAll();
    res.status(200).send(selectAllProducts);
    
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
  
});

export default router;