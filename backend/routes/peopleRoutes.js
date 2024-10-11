import { Router } from "express";
import PeopleRepository from "../repository/PeopleRepository.js";

const router = Router();

router.get('/', async (req,res) => {

  try {
    const selectAllPeople = await new PeopleRepository().getAll();
    res.status(200).send(selectAllPeople);
    
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
  
});

export default router;