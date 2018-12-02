import React, {Component} from "react";

class OverHeadComponent extends Component {
  render() {
    const {id} = this.props;
    return (
      <div className="container text-center mt-3">
        <p className="card-title">Esto es Gastos generales #{id}</p>
      </div>
    );
  }
}

export default OverHeadComponent;
