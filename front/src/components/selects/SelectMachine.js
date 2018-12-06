import React, {Component} from "react";
import shortid from "shortid";

class SelectMachine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={shortid.generate()}>
        <button type="button" className="btn btn-primary">
          Agregar Equipo
        </button>
      </div>
    );
  }
}

export default SelectMachine;
