import BaseRepository from "./BaseRepository.js";

class PeopleRepository extends BaseRepository{
  async getAll (){
    const selectAllPeople = await super.getAll('people');
    return selectAllPeople;
  }
}

export default PeopleRepository;