import React, {Component} from "react";
import shortid from "shortid";

class SelectWorkForce extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={shortid.generate()}>
        <button type="button" className="btn btn-primary">
          hola
        </button>
      </div>
    );
  }
}

export default SelectWorkForce;
