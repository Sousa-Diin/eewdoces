import BaseRepository from "./BaseRepository.js";

class TransactionsRepository extends BaseRepository{
  async getAll (){
    const selectAllTransactions = await super.getAll('transactions',['id','order_id','amount_paid','method_paid','payment_status','date_transaction']);
    return selectAllTransactions;
  }
}

export default TransactionsRepository;