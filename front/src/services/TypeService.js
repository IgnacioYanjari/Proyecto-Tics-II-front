import MainService from 'services/MainService';

class TypeService extends MainService {

    material() {
      return this.fetch(`${this.domain}/types/materials`,{
        method: 'GET',
      }).then(res => {
          this.setToken(res.token);
          return Promise.resolve(res);
      })
    }

    supplies() {
      return this.fetch(`${this.domain}/types/supplies`,{
        method: 'GET',
      }).then(res => {
          this.setToken(res.token);
          return Promise.resolve(res);
      })
    }

    machines() {
      return this.fetch(`${this.domain}/types/machines`,{
        method: 'GET',
      }).then(res => {
          this.setToken(res.token);
          return Promise.resolve(res);
      })
    }

    works() {
      return this.fetch(`${this.domain}/types/works`,{
        method: 'GET',
      }).then(res => {
          this.setToken(res.token);
          return Promise.resolve(res);
      })
    }

    workForces() {
      return this.fetch(`${this.domain}/types/work-forces`,{
        method: 'GET',
      }).then(res => {
          this.setToken(res.token);
          return Promise.resolve(res);
      })
    }

    tenders() {
      return this.fetch(`${this.domain}/types/tenders`,{
        method: 'GET',
      }).then(res => {
          this.setToken(res.token);
          return Promise.resolve(res);
      })
    }

    clients() {
      return this.fetch(`${this.domain}/types/clients`,{
        method: 'GET',
      }).then(res => {
          this.setToken(res.token);
          return Promise.resolve(res);
      })
    }
}

export default TypeService;
