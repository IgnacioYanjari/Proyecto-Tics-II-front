import MainService from "services/MainService";

class TypeService extends MainService {
  // ------------------ Get -------------------------------------------
  getMaterials() {
    return this.fetch(`${this.domain}/types/materials`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  getSupplies() {
    return this.fetch(`${this.domain}/types/supplies`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  getMachines() {
    return this.fetch(`${this.domain}/types/machines`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  getClients() {
    return this.fetch(`${this.domain}/types/clients`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  getTenders() {
    return this.fetch(`${this.domain}/types/tenders`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  getWorks() {
    return this.fetch(`${this.domain}/types/works`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  getWorkForces() {
    return this.fetch(`${this.domain}/types/workForces`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  // ------------------ Update -------------------------------------------

  updateMaterial(data, materialId) {
    return this.fetch(
      `${this.domain}/types/materials/${materialId}`,
      {
        method: "PUT",
        body: JSON.stringify(data)
      },
      "Datos actualizados correctamente",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  updateSupply(data, supplyId) {
    return this.fetch(
      `${this.domain}/types/supplies/${supplyId}`,
      {
        method: "PUT",
        body: JSON.stringify(data)
      },
      "Datos actualizados correctamente",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  updateMachine(data, machineId) {
    return this.fetch(
      `${this.domain}/types/machines/${machineId}`,
      {
        method: "PUT",
        body: JSON.stringify(data)
      },
      "Datos actualizados correctamente",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  updateClient(data, clientId) {
    return this.fetch(
      `${this.domain}/types/clients/${clientId}`,
      {
        method: "PUT",
        body: JSON.stringify(data)
      },
      "Datos actualizados correctamente",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  updateTender(data, tenderId) {
    return this.fetch(
      `${this.domain}/types/tenders/${tenderId}`,
      {
        method: "PUT",
        body: JSON.stringify(data)
      },
      "Datos actualizados correctamente",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  updateWork(data, workId) {
    return this.fetch(
      `${this.domain}/types/works/${workId}`,
      {
        method: "PUT",
        body: JSON.stringify(data)
      },
      "Datos actualizados correctamente",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  updateWorkForce(data, workForceId) {
    return this.fetch(
      `${this.domain}/types/workForces/${workForceId}`,
      {
        method: "PUT",
        body: JSON.stringify(data)
      },
      "Datos actualizados correctamente",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  // ------------------ Create -------------------------------------------

  createMaterial(data) {
    return this.fetch(
      `${this.domain}/types/materials`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Material creado con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  createSupply(data) {
    return this.fetch(
      `${this.domain}/types/supplies`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Tipo de Insumo creado con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  createMachine(data) {
    return this.fetch(
      `${this.domain}/types/machines`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Tipo de Maquinaria creada con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  createClient(data) {
    return this.fetch(
      `${this.domain}/types/clients`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Tipo de Cliente creado con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  createTender(data) {
    return this.fetch(
      `${this.domain}/types/tenders`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Tipo de Licitación creada con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  createWork(data) {
    return this.fetch(
      `${this.domain}/types/works`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Tipo de Obra creada con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  createWorkForce(data) {
    return this.fetch(
      `${this.domain}/types/workForces/`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Tipo de Mano de obra creada con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }
}

export default TypeService;
