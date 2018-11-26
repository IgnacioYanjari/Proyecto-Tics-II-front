import MainService from 'services/MainService';

class TypeService extends MainService {

    getMaterials() {
      return this.fetch(`${this.domain}/types/materials`, {
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    getSupplies() {
      return this.fetch(`${this.domain}/types/supplies`, {
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    getMachines() {
      return this.fetch(`${this.domain}/types/machines`, {
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    getClients() {
      return this.fetch(`${this.domain}/types/clients`, {
        method: 'GET',
      }).then( res => {
        return Promise.resolve(res);
      })
    }

    getTenders() {
      return this.fetch(`${this.domain}/types/tenders`, {
        method: 'GET',
      }).then( res => {
        return Promise.resolve(res);
      })
    }

    getWorks() {
      return this.fetch(`${this.domain}/types/works`, {
        method: 'GET',
      }).then( res => {
        return Promise.resolve(res);
      })
    }

    getWorkForces() {
      return this.fetch(`${this.domain}/types/work-forces`, {
        method: 'GET',
      }).then( res => {
        return Promise.resolve(res);
      })
    }

}

export default TypeService;
