import BaseRepository from "./BaseRepository.js";

class PeopleRepository extends BaseRepository{
  async getAll (){
    try{
        const selectAllPeople = await super.getAll(
          'people',
          ['name',
            'type_person',
            'phone',
            'address'
          ]
        );
        return selectAllPeople;
    }
    catch(error){
      throw error;
    }
  } 

  async getById(id){
    try {
      const result = await super.getById(
        'people',
        ['name',
          'type_person',
          'phone',
          'address'
        ],
          id
        );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async insertOne(valuesArray){ 
    try {
      const result = await super.insertOne(
        'people',
        ['name',
          'type_person',
          'phone',
          'address',
        ],
      valuesArray
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default PeopleRepository;