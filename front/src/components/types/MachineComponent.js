import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class MachineComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      machines : []
    };
    this.typeService = new TypeService();
    this.renderMachines = this.renderMachines.bind(this);
  }

  componentDidMount() {
    this.typeService.machines()
      .then(res => {
        console.log(res.data);
        this.setState({ machines : res.data })
      });
  }

  renderMachines() {
    const machines = this.state.machines;
    return machines.map( machine => {
      return(
        <tr key={shortid.generate()}>
          <td> {machine.id} </td>
          <td> {machine.name} </td>
          <td> {machine.price} </td>
          <td> { (machine.weight) ? machine.weight : '---'} </td>
          <td> { (machine.weight_type) ? machine.weight_type : '---'} </td>
        </tr>
      );
    });

  }

  render() {
    return (
      <div className="table-responsive">
        <h4 className="text-center"> Maquinaria </h4>
        <table className="table table-bordered table-sm table-hover">
          <thead>
            <tr>
              <th className="scope">#</th>
              <th className="scope">Nombre</th>
              <th className="scope">Precio</th>
              <th className="scope">Peso</th>
              <th className="scope">Medida</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMachines()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MachineComponent;
