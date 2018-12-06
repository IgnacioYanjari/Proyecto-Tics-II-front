import React, {Component} from "react";
import shortid from "shortid";
import ProductService from "services/ProductService";

class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: []
    };
    this.machineService = new ProductService();
  }

  closeModal() {
    document.getElementById("modalButton").click();
  }

  handleSubmit(event) {
    event.preventDefault();
    let {machines} = this.state;
    this.props.onMachine({
      machines: machines
    });
    return this.closeModal();
  }

  loadMachine() {
    this.machineService.getMachines().then(res => {
      if (res.status === "success") {
        this.setState({
          machines: res.data
        });
      }
    });
  }

  componentDidMount() {
    this.loadMachine();
  }

  render() {
    const {machines} = this.state;
    console.log(this.state.machines);
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          id="modalButton"
          data-toggle="modal"
          data-target="#modalMachine"
        >
          Seleccionar Equipo
        </button>
        <div
          className="modal fade"
          id="modalMachine"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Equipo
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
                  {this.loadMachine}
                  <div className="form-group">
                    <label htmlFor="brand"> Nombre </label>
                    <select
                      className="custom-select"
                      id="name"
                      value={machines.id}
                    >
                      {machines.map(value => {
                        return (
                          <option key={shortid.generate()} value={value.id}>
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Machine;
