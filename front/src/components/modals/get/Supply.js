import React, {Component} from "react";
import shortid from "shortid";
import ProductService from "services/ProductService";

class Supply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supplies: []
    };
    this.supplyService = new ProductService();
  }

  closeModal() {
    document.getElementById("modalButton").click();
  }

  handleSubmit(event) {
    event.preventDefault();
    let {supplies} = this.state;
    this.props.onSupply({
      supplies: supplies
    });
    return this.closeModal();
  }

  loadSupply() {
    this.supplyService.getSupplies().then(res => {
      if (res.status === "success") {
        this.setState({
          supplies: res.data
        });
      }
    });
  }

  componentDidMount() {
    this.loadSupply();
  }

  render() {
    const {supplies} = this.state;
    console.log(this.state.supplies);
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          id="modalButton"
          data-toggle="modal"
          data-target="#modalSupply"
        >
          Seleccionar Insumo
        </button>
        <div
          className="modal fade"
          id="modalSupply"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Insumo
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
                  {this.loadSupply}
                  <div className="form-group">
                    <label htmlFor="brand"> Nombre </label>
                    <select
                      className="custom-select"
                      id="name"
                      value={supplies.id}
                    >
                      {supplies.map(value => {
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

export default Supply;
