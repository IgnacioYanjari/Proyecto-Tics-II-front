import React, {Component} from "react";

class MachineComponent extends Component {
  render() {
    const {id} = this.props;
    return (
      <div className="container text-center mt-3">
        <p className="card-title">Esto es maquinaria #{id}</p>
      </div>
    );
  }
}

export default MachineComponent;
