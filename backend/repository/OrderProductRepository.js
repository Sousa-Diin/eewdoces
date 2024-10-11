import BaseRepository from "./BaseRepository.js";

class OrderProductRepository extends BaseRepository{
  async getAll (){
    const selectAllOrderProducts = await super.getAll('order_product');
    return selectAllOrderProducts;
  }
}

export default OrderProductRepository;