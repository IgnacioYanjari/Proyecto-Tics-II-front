import MainService from 'services/MainService';

class CreateService extends MainService {

  createWork(data) {
    return this.fetch(`${this.domain}/')``
  }
}

export default CreateService;
