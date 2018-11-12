import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class SupplyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      supplies : []
    };
    this.typeService = new TypeService();
    this.renderSupplies = this.renderSupplies.bind(this);
  }

  componentDidMount() {
    this.typeService.supplies()
      .then(res => this.setState({ supplies : res.data }));
  }

  renderSupplies() {
    const supplies = this.state.supplies;
    return supplies.map( supply => {
      return(
        <tr key={shortid.generate()}>
          <td> {supply.id} </td>
          <td> {supply.name} </td>
          <td> {supply.price} </td>
          <td> {supply.type} </td>
          <td> {supply.brand} </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-responsive">
        <h4 className="text-center"> Insumos </h4>
        <table className="table table-bordered table-sm table-hover">
          <thead>
            <tr>
              <th className="scope">#</th>
              <th className="scope">Nombre</th>
              <th className="scope">Precio</th>
              <th className="scope">Tipo</th>
              <th className="scope">Marca</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSupplies()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SupplyComponent;
