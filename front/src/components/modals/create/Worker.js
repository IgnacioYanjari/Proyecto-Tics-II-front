import React, {Component} from "react";
import WorkerService from "services/WorkerService";

class WorkerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      rut: "",
      phone: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.workService = new WorkerService();
  }

  componentDidMount() {}

  closeModal() {
    document.getElementById("modalButtonWorker").click();
    this.setState({
      firstName: "",
      lastName: "",
      rut: "",
      phone: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let {firstName, lastName, rut, phone} = this.state;
    if (phone === "") phone = null;
    this.workService
      .create({
        firstName,
        lastName,
        rut,
        phone
      })
      .then(res => {
        console.log(res);
        this.props.refreshTable();
        this.closeModal();
      });
  }

  handleChange(event, name) {
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    let {firstName, lastName, rut, phone} = this.state;
    return (
      <div>
        <button
          type="button"
          id="modalButtonWorker"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modalWorker"
        >
          Crear
        </button>

        <div
          className="modal fade"
          id="modalWorker"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Crear Trabajador
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="firstName"> Nombre </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={e => this.handleChange(e, "firstName")}
                      className="form-control"
                      id="firstName"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Apellido</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={e => this.handleChange(e, "lastName")}
                      className="form-control"
                      id="lastName"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rut">Rut</label>
                    <input
                      type="text"
                      value={rut}
                      onChange={e => this.handleChange(e, "rut")}
                      className="form-control"
                      id="rut"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefono</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={e => this.handleChange(e, "phone")}
                      className="form-control"
                      id="phone"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkerComponent;
