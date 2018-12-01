import React, {Component} from "react";
import TypeService from "services/TypeService";

class MachineType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.typeService = new TypeService();
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    document.getElementById("modalButtonMachineType").click();
    this.setState({
      name: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let {name} = this.state;
    this.typeService
      .createMachine({
        name: name
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
    const {name} = this.state;
    return (
      <div>
        <button
          type="button"
          id="modalButtonMachineType"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modalMachineType"
        >
          Crear
        </button>

        <div
          className="modal fade"
          id="modalMachineType"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Crear Tipo de Maquinaria
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

export default MachineType;
