import { Router } from "express";
import PeopleRepository from "../repository/PeopleRepository.js";

const router = Router();

router.get('/', async (req,res) => {

  try {
    const selectAllPeople = await new PeopleRepository().getAll();
    res.status(200).send(selectAllPeople);
    return;
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
  
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const element = await new PeopleRepository().getById(id);
    res.status(200).send(element);
    return;
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).send('Erro ao acessar os dados');
  }
});

export default router;