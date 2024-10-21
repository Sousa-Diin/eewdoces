import BaseRepository from "./BaseRepository.js";

class OrderProductRepository extends BaseRepository{
  async getAll (){
    const selectAllOrderProducts = await super.getAll('order_product',['id','product_id','count','unit_price']);
    return selectAllOrderProducts;
  }
}

export default OrderProductRepository;