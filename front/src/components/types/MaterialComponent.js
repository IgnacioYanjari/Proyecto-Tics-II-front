import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class MaterialComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      materials : []
    };
    this.typeService = new TypeService();
    this.renderMaterials = this.renderMaterials.bind(this);
  }

  componentDidMount() {
    this.typeService.material()
      .then(res => this.setState({ materials : res.data }));
  }

  renderMaterials() {
    const materials = this.state.materials;
    return materials.map( material => {
      return(
        <tr key={shortid.generate()}>
          <td> {material.id} </td>
          <td> {material.name} </td>
          <td> {material.price} </td>
          <td> {material.type} </td>
          <td> {material.brand} </td>
        </tr>
      );
    })
  }

  render() {
    return (
      <div className="table-responsive">
        <h4 className="text-center"> Materiales </h4>
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
            {this.renderMaterials()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MaterialComponent;
