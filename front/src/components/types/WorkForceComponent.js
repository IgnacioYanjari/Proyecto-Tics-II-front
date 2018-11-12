import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class WorkForceComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      workForces : []
    };
    this.typeService = new TypeService();
    this.renderWorkForces = this.renderWorkForces.bind(this);
  }

  componentDidMount() {
    this.typeService.workForces()
      .then(res => this.setState({ workForces : res.data }));
  }

  renderWorkForces() {
    const workForces = this.state.workForces;
    return workForces.map( workForce => {
      return(
        <tr key={shortid.generate()}>
          <td> {workForce.id} </td>
          <td> {workForce.name} </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-responsive">
        <h4 className="text-center"> Mano de obras </h4>
        <table className="table table-bordered table-sm table-hover">
          <thead>
            <tr>
              <th className="scope">#</th>
              <th className="scope">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {this.renderWorkForces()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WorkForceComponent;
