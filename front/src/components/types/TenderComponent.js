import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class TenderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tenders : []
    };
    this.typeService = new TypeService();
    this.renderTenders = this.renderTenders.bind(this);
  }

  componentDidMount() {
    this.typeService.tenders()
      .then(res => this.setState({ tenders : res.data }));
  }

  renderTenders() {
    const tenders = this.state.tenders;
    return tenders.map( tender => {
      return(
        <tr key={shortid.generate()}>
          <td> {tender.id} </td>
          <td> {tender.name} </td>
          <td> {tender.type} </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-responsive">
        <h4 className="text-center"> Licitaciones </h4>
        <table className="table table-bordered table-sm table-hover">
          <thead>
            <tr>
              <th className="scope">#</th>
              <th className="scope">Nombre</th>
              <th className="scope">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTenders()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TenderComponent;
