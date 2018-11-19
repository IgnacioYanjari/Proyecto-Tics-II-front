import MainService from 'services/MainService';

class ProductService extends MainService {

    getMaterial() {
      return this.fetch(`${this.domain}/products/materials`,{
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    getSupplies() {
      return this.fetch(`${this.domain}/products/supplies`,{
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    getMachines() {
      return this.fetch(`${this.domain}/products/machines`,{
        method: 'GET',
      }).then(res => {
          return Promise.resolve(res);
      })
    }

    updateMachine(data, machineId) {
      return this.fetch(`${this.domain}/products/machines/${machineId}`,{
        method: 'PUT',
        body: JSON.stringify(data),
      },'Datos actualizados correctamente', 'Error').then(res => {
          return Promise.resolve(res);
      })
    }

    updateMaterial(data, materialId) {
      return this.fetch(`${this.domain}/products/materials/${materialId}`,{
        method: 'PUT',
        body: JSON.stringify(data),
      },'Datos actualizados correctamente', 'Error').then(res => {
          return Promise.resolve(res);
      })
    }

    updateSupply(data, supplyId) {
      return this.fetch(`${this.domain}/products/supplies/${supplyId}`,{
        method: 'PUT',
        body: JSON.stringify(data),
      },'Datos actualizados correctamente', 'Error').then(res => {
          return Promise.resolve(res);
      })
    }

}

export default ProductService;
