import React, {Component} from "react";

class SupplyComponent extends Component {
  render() {
    const {id} = this.props;
    return (
      <div className="container text-center mt-3">
        <p className="card-title">Esto es insumos #{id}</p>
      </div>
    );
  }
}

export default SupplyComponent;
