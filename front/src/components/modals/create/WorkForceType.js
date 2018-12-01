import React, {Component} from "react";
import TypeService from "services/TypeService";

class WorkForceType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: 1000
    };
    this.closeModal = this.closeModal.bind(this);
    this.typeService = new TypeService();
  }

  closeModal() {
    document.getElementById("modalButtonWorkForceType").click();
    this.setState({
      name: "",
      salary: 1000
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let {name, salary} = this.state;
    this.typeService
      .createWorkForce({
        name: name,
        salary: salary
      })
      .then(res => {
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
    const {name, salary} = this.state;
    return (
      <div>
        <button
          type="button"
          id="modalButtonWorkForceType"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modalWorkForceType"
        >
          Crear
        </button>

        <div
          className="modal fade"
          id="modalWorkForceType"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Crear Tipo de Mano de obra
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
                    <label htmlFor="name"> Nombre </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => this.handleChange(e, "name")}
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="salary">Sueldo aprox</label>
                    <input
                      type="number"
                      value={salary}
                      onChange={e => this.handleChange(e, "salary")}
                      className="form-control"
                      min="10000"
                      id="salary"
                      required
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
                    {" "}
                    Crear{" "}
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

export default WorkForceType;
