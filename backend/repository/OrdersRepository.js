import BaseRepository from "./BaseRepository.js";

class OrdersRepository extends BaseRepository{
  async getAll (){
    const selectAllOrders = await super.getAll('orders');
    return selectAllOrders;
  }
}

export default OrdersRepository;