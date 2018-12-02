import React, {Component} from "react";

class MaterialComponent extends Component {
  render() {
    const {id} = this.props;
    return (
      <div className="container text-center mt-3">
        <p className="card-title">Esto es un material #{id}</p>
      </div>
    );
  }
}

export default MaterialComponent;
