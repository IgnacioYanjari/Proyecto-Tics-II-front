import React, {Component} from "react";

class GeneralComponent extends Component {
  render() {
    const {id} = this.props;
    return (
      <div className="container text-center mt-3">
        <p className="card-title">Esto es una descripción general #{id}</p>
      </div>
    );
  }
}

export default GeneralComponent;
