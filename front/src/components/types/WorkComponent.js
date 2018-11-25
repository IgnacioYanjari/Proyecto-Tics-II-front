import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import shortid from 'shortid';

class WorkComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      works : []
    };
    this.typeService = new TypeService();
    this.renderWorks = this.renderWorks.bind(this);
  }

  componentDidMount() {
    this.typeService.works()
      .then(res => this.setState({ works : res.data }));
  }

  renderWorks() {
    const works = this.state.works;
    return works.map( work => {
      return(
        <tr key={shortid.generate()}>
          <td> {work.id} </td>
          <td> {work.name} </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-responsive">
        <h4 className="text-center"> Obras </h4>
        <table className="table table-bordered table-sm table-hover">
          <thead>
            <tr>
              <th className="scope">#</th>
              <th className="scope">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {this.renderWorks()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WorkComponent;
