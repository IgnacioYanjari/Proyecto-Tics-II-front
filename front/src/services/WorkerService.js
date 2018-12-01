import MainService from "services/MainService";

class TypeService extends MainService {
  get() {
    return this.fetch(`${this.domain}/workers`, {
      method: "GET"
    }).then(res => {
      return Promise.resolve(res);
    });
  }

  update(data, workerId) {
    return this.fetch(
      `${this.domain}/workers/${workerId}`,
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

  create(data) {
    return this.fetch(
      `${this.domain}/workers/`,
      {
        method: "POST",
        body: JSON.stringify(data)
      },
      "Trabajador creado con éxito",
      "Error"
    ).then(res => {
      return Promise.resolve(res);
    });
  }
}

export default TypeService;
