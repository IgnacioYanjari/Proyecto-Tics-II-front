import React, {Component} from "react";
import shortid from "shortid";

class SelectSupply extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={shortid.generate()}>
        <button type="button" className="btn btn-primary">
          Agregar Insumo
        </button>
      </div>
    );
  }
}

export default SelectSupply;
