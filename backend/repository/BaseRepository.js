import pool from "./db.js";


class BaseRepository {
  async getAll(table){
    const results = (await pool.query(`SELECT * FROM ${table}`)).rows;
    return results;
  }

}


export default BaseRepository;