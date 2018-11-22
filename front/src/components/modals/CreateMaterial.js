import React, { Component } from 'react';
import ProductService from 'services/ProductService';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class CreateMaterial extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price: 10,
      brand: '',
      types: [],
      type: {},
    }
    this.typeService = new TypeService();
    this.productService = new ProductService();
  }

  componentDidMount(){
    this.typeService.getMaterial()
    .then(res => {
      this.setState({
        types: res.data,
        type: res.data[0]
       });
    })
  }

  closeModal() {
    document.getElementById('modalButton').click();
  }

  handleSubmit(event){
    event.preventDefault();
    let {name, price, brand, type} = this.state;
    this.productService.createMaterial({
      name: name,
      price: price,
      brand: brand,
      typeId: type.id,
    }).then( res => {
      this.props.refreshTable();
      this.closeModal();
    });
  }

  handleChange(event, name){
    if(name === 'type') {
      let value = this.state.types.find( e => e.id === parseInt(event.target.value, 10));
      this.setState({
        [name]: value
      });
    } else {
      this.setState({
        [name]: event.target.value
      })
    }
  }

  render() {
    const {name, price, brand, types, type} = this.state;
    return(
      <div>
        <button type="button" id="modalButton" className="btn btn-primary" data-toggle="modal" data-target="#modalMaterial">
          Crear
        </button>

        <div className="modal fade" id="modalMaterial" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Crear Material</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={ (e) => this.handleSubmit(e)}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="name"> Nombre </label>
                    <input type="text" value={name} onChange={(e) => this.handleChange(e, 'name')}
                        className="form-control" id="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Precio</label>
                    <input type="number" value={price} onChange={(e) => this.handleChange(e, 'price')}
                        className="form-control" min="10" id="price" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="brand"> Marca </label>
                    <input type="text" value={brand} onChange={(e) => this.handleChange(e, 'brand')}
                        className="form-control" id="brand" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="brand"> Tipo </label>
                    <select className="custom-select" id="type" value={type.id}
                        onChange={(e) => this.handleChange(e, 'type')}>
                      { types.map(value => {
                          return(
                            <option key={shortid.generate()} value={value.id}>
                              {value.name}
                            </option>
                          );
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal"> Cerrar </button>
                  <button type="submit" className="btn btn-primary"> Crear </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateMaterial;
