import BaseRepository from "./BaseRepository.js";

class TransactionsRepository extends BaseRepository{
  async getAll (){
    const selectAllTransactions = await super.getAll('transactions');
    return selectAllTransactions;
  }
}

export default TransactionsRepository;