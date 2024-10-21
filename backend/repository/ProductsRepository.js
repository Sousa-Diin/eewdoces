import BaseRepository from "./BaseRepository.js";

class ProductsRepository extends BaseRepository{
  async getAll (){
    const selectAllProducts = await super.getAll('products',['id', 'describe','price','stock']);
    return selectAllProducts;
  }
}

export default ProductsRepository;