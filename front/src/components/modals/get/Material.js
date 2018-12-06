import React, {Component} from "react";
import shortid from "shortid";
import ProductService from "services/ProductService";

class Material extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: []
    };
    this.workerService = new ProductService();
  }

  closeModal() {
    document.getElementById("modalButton").click();
  }

  handleSubmit(event) {
    event.preventDefault();
    let {materials} = this.state;
    return materials.map(value => {
      <div key={shortid.generate()}>
        <div>{value.name}</div>
      </div>;
    });
  }

  loadMaterial() {
    this.workerService.getMaterial().then(res => {
      if (res.status === "success") {
        this.setState({
          materials: res.data
        });
      }
    });
  }

  addMaterial() {
    let {materials} = this.state;
    return materials.map(value => {
      <div key={shortid.generate()}>
        <div>{value.name}</div>
      </div>;
    });
  }

  componentDidMount() {
    this.loadMaterial();
  }

  render() {
    const {materials} = this.state;
    console.log(this.state.materials);
    return (
      <div classname="row container-fluid">
        <button
          type="button"
          className="btn btn-primary"
          id="modalButton"
          data-toggle="modal"
          data-target="#modalMaterial"
        >
          Seleccionar Material
        </button>
        <div
          className="modal fade"
          id="modalMaterial"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Material
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
                  {this.loadMaterial}
                  <div className="form-group">
                    <label htmlFor="brand"> Nombre </label>
                    <select
                      className="custom-select"
                      id="name"
                      value={materials.id}
                    >
                      {materials.map(value => {
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
        // {this.addMaterial()}
      </div>
    );
  }
}

export default Material;
