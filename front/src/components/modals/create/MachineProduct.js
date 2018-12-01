import React, {Component} from "react";
import ProductService from "services/ProductService";
import TypeService from "services/TypeService";
import shortid from "shortid";

class MachineProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 10,
      types: [],
      type: {},
      weight: "",
      measurement: "",
      renderWeigth: false
    };
    this.addWeigth = this.addWeigth.bind(this);
    this.closeWeigth = this.closeWeigth.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.typeService = new TypeService();
    this.productService = new ProductService();
  }

  componentDidMount() {
    this.typeService.getMachines().then(res => {
      this.setState({
        types: res.data,
        type: res.data[0]
      });
    });
  }

  closeModal() {
    document.getElementById("modalButtonMachineProduct").click();
    this.setState({
      name: "",
      price: 10,
      types: [],
      type: {},
      weight: "",
      measurement: "",
      renderWeigth: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let {name, price, type, weight, measurement} = this.state;
    if (weight === "" && measurement === "") {
      weight = null;
      measurement = null;
    }
    this.productService
      .createMachine({
        name: name,
        price: price,
        typeId: type.id,
        weight: weight,
        measurement: measurement
      })
      .then(res => {
        console.log(res);
        this.props.refreshTable();
        this.closeModal();
      });
  }

  handleChange(event, name) {
    if (name === "type") {
      if (event.target.value === -1) {
        return this.setState({
          [name]: {id: -1}
        });
      }
      let value = this.state.types.find(
        e => e.id === parseInt(event.target.value, 10)
      );
      this.setState({
        [name]: value
      });
    } else {
      if (event.target.value === "") {
        this.setState({
          [name]: ""
        });
      } else {
        this.setState({
          [name]: event.target.value
        });
      }
    }
  }

  addWeigth() {
    this.setState({
      weight: 1,
      measurement: "TON",
      renderWeigth: true
    });
  }

  closeWeigth() {
    this.setState({
      weight: "",
      measurement: "",
      renderWeigth: false
    });
  }

  render() {
    let {
      name,
      price,
      types,
      type,
      weight,
      measurement,
      renderWeigth
    } = this.state;
    return (
      <div>
        <button
          type="button"
          id="modalButtonMachineProduct"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modalMachineProduct"
        >
          Crear
        </button>

        <div
          className="modal fade"
          id="modalMachineProduct"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Crear Maquinaria
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
                    <label htmlFor="price">Precio</label>
                    <input
                      type="number"
                      value={price}
                      onChange={e => this.handleChange(e, "price")}
                      className="form-control"
                      min="10"
                      id="price"
                      required
                    />
                  </div>
                  {renderWeigth ? (
                    <div>
                      <div className="form-group">
                        <label htmlFor="weight">Peso</label>
                        <input
                          type="number"
                          value={weight}
                          onChange={e => this.handleChange(e, "weight")}
                          className="form-control"
                          min="0"
                          id="weight"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="measurement"> Medida </label>
                        <select
                          className="custom-select"
                          id="measurement"
                          value={measurement}
                          onChange={e => this.handleChange(e, "measurement")}
                        >
                          <option value="TON"> Toneladas (TON) </option>
                          <option value="KG"> Kilogramos (KG) </option>
                          <option value=""> No aplica </option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                  <div className="form-group">
                    <label htmlFor="type"> Tipo </label>
                    <select
                      className="custom-select"
                      id="type"
                      value={type.id}
                      onChange={e => this.handleChange(e, "type")}
                    >
                      {types.map(value => {
                        return (
                          <option key={shortid.generate()} value={value.id}>
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  {!renderWeigth ? (
                    <button
                      type="button"
                      onClick={this.addWeigth}
                      className="btn btn-primary"
                    >
                      Agregar peso
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={this.closeWeigth}
                      className="btn btn-primary"
                    >
                      Sacar peso
                    </button>
                  )}

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

export default MachineProduct;
