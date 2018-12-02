import React, {Component} from "react";

class WorkForceComponent extends Component {
  render() {
    const {id} = this.props;
    return (
      <div className="container text-center mt-3">
        <p className="card-title">Esto es mano de obra #{id}</p>
      </div>
    );
  }
}

export default WorkForceComponent;
