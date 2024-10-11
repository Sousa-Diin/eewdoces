import BaseRepository from "./BaseRepository.js";

class ProductsRepository extends BaseRepository{
  async getAll (){
    const selectAllProducts = await super.getAll('products');
    return selectAllProducts;
  }
}

export default ProductsRepository;