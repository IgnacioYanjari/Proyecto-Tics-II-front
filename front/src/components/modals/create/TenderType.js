import React, {Component} from "react";
import TypeService from "services/TypeService";

class TenderType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.typeService = new TypeService();
  }

  closeModal() {
    document.getElementById("modalButtonTenderType").click();
    this.setState({
      name: "",
      type: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let {name, type} = this.state;
    this.typeService
      .createTender({
        name: name,
        type: type
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
    const {name, type} = this.state;
    return (
      <div>
        <button
          type="button"
          id="modalButtonTenderType"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modalTenderType"
        >
          Crear
        </button>

        <div
          className="modal fade"
          id="modalTenderType"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Crear Tipo de Licitación
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
                    <label htmlFor="type"> Tipo </label>
                    <input
                      type="text"
                      value={type}
                      onChange={e => this.handleChange(e, "type")}
                      className="form-control"
                      id="type"
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

export default TenderType;
