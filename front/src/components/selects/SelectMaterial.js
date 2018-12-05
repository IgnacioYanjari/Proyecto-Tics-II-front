import React, {Component} from "react";
import shortid from "shortid";

class SelectMaterial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={shortid.generate()}>
        <button type="button" className="btn btn-primary">
          Agregar Material
        </button>
      </div>
    );
  }
}

export default SelectMaterial;
