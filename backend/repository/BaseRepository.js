import pool from "./db.js";


class BaseRepository {
  async getAll(table, columnsArray){
    try {
      const results = (await pool.query(`SELECT ${columnsArray.join()} FROM ${table}`)).rows;
      return results;  
    } catch (error) {
        throw error;
    }
  }

  async getById(table, columnsArray, id){
    try{
      const queryText = `SELECT ${columnsArray.join()} FROM ${table} WHERE id= $1`;
      const result = (await pool.query(queryText, [id])).rows[0];
      return result;
    }catch(error){
      throw error;
    }
  }

  async getBy2Id(table, pk, fk){
    try {
      const queryText = `SELECT * FROM ${table} WHERE order_id = $1 AND people_id = $2`;
      const result = (await pool.query(queryText, [pk, fk])).rows[0];
      console.log('Classe Pai [Base Repository]');
      console.log(`IP1: ${pk} \nIP2: ${fk}`);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async insertOne (table, columnsArray, valueArray){
    const client = await pool.connect()// inicia a conexão com BD

    try {
      /* Cria um array vazio do tamanho do columnsArray depois usa os indices apartir do Array.from
      e mapeia cada um criando as flags da consulta dinamicamente ($1, $2, $3, ...)
       */
      let flagsArray = Array.from((new Array(columnsArray.length)).keys()).map( el => `$${el+1}`);

       /*  O join() é usado para para simplificar a escrita das coluna do DB ex: (nome, surname, email) 
          o join monta a estrutura exata para consulta, pegando cada elemento acrescido de uma virgula ficando semelhante a de cima 
          Ex: columnsArray.join()      -> (name, suurname, email)
              VALUES flagsArray.join() -> ($1,$2, $3, $4, ...)
      */
      const queryText = `INSERT INTO ${table} (${columnsArray.join()}) VALUES (${flagsArray.join()})`;
      await client.query('BEGIN TRANSACTION'); // Monitora a consulta
      await client.query(queryText, valueArray);
      await client.query('COMMIT'); // valida as alteracoes da transacao

    } 
    catch (error) {
      await client.query('ROLLBACK'); //Responsavél para desfazer as alteracoes anteriores
      throw error;
    }
    finally{
      client.release(); //encera conexao
    }


  }

  async updatePeople (table, objUpdated){
    /* const client = await pool.connect()
    try {
      // Gere a query dinamicamente
      const setColumns = Object.keys(objUpdaed)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', '); // Gera algo como: "name = $1, phone = $2"

      const values = Object.values(objUpdaed); // Valores a serem usados na query 

      const queryText = `UPDATE ${table} SET ${setColumns} WHERE = ${objUpdaed.id}`;

      await pool.query('BEGIN TRANSACTION');
      await pool.query(queryText, values);
      await pool.query('COMMIT');

    } catch (error) {
      await pool.query('ROLLBACK');
      console.error('Erro ao atualizar dados:', error);
      throw error;
    }finally{
      client.release();
    } */
  const client = await pool.connect();
  try {
    // Extraia o ID e remova-o do objeto de atualização
    const { id, ...columnsToUpdate } = objUpdated;
    if (!id) {
      throw new Error("O campo 'id' é obrigatório para atualização.");
    }

    // Gere as colunas dinâmicas para a query
    const setColumns = Object.keys(columnsToUpdate)
      .map((key, index) => `${key} = $${index + 1}`) // Ex.: "name = $1, phone = $2"
      .join(', ');

    const values = [...Object.values(columnsToUpdate), id]; // Inclua o id no final
    const queryText = `UPDATE ${table} SET ${setColumns} WHERE id = $${values.length}`;

    // Executa a transação
    await client.query('BEGIN');
    await client.query(queryText, values);
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Erro ao atualizar dados:', error.message);
    throw error;
  } finally {
    client.release();
  }
}


 // }

}


export default BaseRepository;