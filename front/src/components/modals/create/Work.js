import React, {Component} from "react";
import shortid from "shortid";

class CreateWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  closeModal() {
    document.getElementById("modalButton").click();
  }

  handleSubmit(event) {
    event.preventDefault();
    let {name} = this.state;
    this.props.onCreateWork({
      name: name,
      key1: shortid.generate(),
      key2: shortid.generate()
    });
    return this.closeModal();
  }

  handleChange(event, name) {
    this.setState({[name]: event.target.value});
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          id="modalButton"
          data-toggle="modal"
          data-target="#modalWork"
        >
          Crear Obra
        </button>
        <div
          className="modal fade"
          id="modalWork"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Obra
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
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => this.handleChange(e, "name")}
                      className="form-control"
                      id="name"
                      required="required"
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

export default CreateWork;
