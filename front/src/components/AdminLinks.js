import React, {Component} from "react";
import {Link} from "react-router-dom";
import shortid from "shortid";

class AdminLinks extends Component {
  constructor(props) {
    super(props);
    this.renderColumns = this.renderColumns.bind(this);
  }

  renderColumns() {
    let columns = this.props.links;
    let large = 10 / columns.length;
    return columns.map(value => {
      return (
        <div
          className={`col-${large} text-center mt-3`}
          key={shortid.generate()}
        >
          <Link to={`${value.url}`}>
            <button type="button btn btn-block" className="btn btn-primary">
              {value.name}
            </button>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container text-center mt-3">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Administrar</h3>
          </div>
          <div className="card-body">
            <div className="row">{this.renderColumns()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLinks;
