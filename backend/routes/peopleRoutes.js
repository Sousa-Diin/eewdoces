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

router.post('/', async (req, res) => {
  const { body } = req;
  console.log('Body: ', body);
  const columnsArray = ['name', 'type_person', 'phone', 'address']; // array base;

  /*  Verifica se o obj da req esta na ordem certa, usando o array base 
      e retornando um array [] com os elememto na posição correta com a função "reduce" 
  */
  const valuesArray = columnsArray.reduce((acc, columnName) =>{
    acc.push(body[columnName]);
    return acc;
  }, []);

  await new PeopleRepository().insertOne(valuesArray);
  res.status(200).send('people added');
});

export default router;