import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class ClientComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients : []
    };
    this.typeService = new TypeService();
    this.renderClients = this.renderClients.bind(this);
  }

  componentDidMount() {
    this.typeService.clients()
      .then(res => this.setState({ clients : res.data }));
  }

  renderClients() {
    const clients = this.state.clients;
    return clients.map( clients => {
      return(
        <tr key={shortid.generate()}>
          <td> {clients.id} </td>
          <td> {clients.name} </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-responsive">
        <h4 className="text-center"> Clientes </h4>
        <table className="table table-bordered table-sm table-hover">
          <thead>
            <tr>
              <th className="scope">#</th>
              <th className="scope">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {this.renderClients()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClientComponent;
