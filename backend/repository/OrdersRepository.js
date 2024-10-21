import BaseRepository from "./BaseRepository.js";

class OrdersRepository extends BaseRepository{
  async getAll (){
    const selectAllOrders = await super.getAll(
      'orders',
      ['people_id',
        'date_order',
        'type_order',
        'total',
        'status'
      ]
    );
    return selectAllOrders;
  }

  async getBy2Id(id1, id2){
    try {
      const result = await super.getBy2Id(
        'orders',
        id1,
        id2
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}


export default OrdersRepository;