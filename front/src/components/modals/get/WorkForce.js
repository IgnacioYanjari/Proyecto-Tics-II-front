import React, {Component} from "react";
import shortid from "shortid";
import WorkerService from "services/WorkerService";

class WorkForce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: []
    };
    this.workerService = new WorkerService();
  }

  closeModal() {
    document.getElementById("modalButton").click();
  }

  handleSubmit(event) {
    event.preventDefault();
    let {workers} = this.state;
    this.props.onWorkForce({
      workers: workers
    });
    return this.closeModal();
  }

  loadWorkForce() {
    this.workerService.get().then(res => {
      if (res.status === "success") {
        this.setState({
          workers: res.data
        });
      }
    });
  }

  componentDidMount() {
    this.loadWorkForce();
  }

  render() {
    const {workers} = this.state;
    console.log(this.state.workers);
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          id="modalButton"
          data-toggle="modal"
          data-target="#modalWorkForce"
        >
          Seleccionar Mano de Obra
        </button>
        <div
          className="modal fade"
          id="modalWorkForce"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Mano de Obra
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
                  {this.loadWorkForce}
                  <div className="form-group">
                    <label htmlFor="brand"> Nombre </label>
                    <select
                      className="custom-select"
                      id="name"
                      value={workers.id}
                    >
                      {workers.map(value => {
                        return (
                          <option key={shortid.generate()} value={value.id}>
                            {value.firstName}
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

export default WorkForce;
