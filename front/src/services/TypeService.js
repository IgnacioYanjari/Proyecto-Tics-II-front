import MainService from 'services/MainService';

class TypeService extends MainService {

    getMaterial() {
      return this.fetch(`${this.domain}/types/materials`,{
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    getSupplies() {
      return this.fetch(`${this.domain}/types/supplies`,{
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    getMachines() {
      return this.fetch(`${this.domain}/types/machines`,{
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

}

export default TypeService;
