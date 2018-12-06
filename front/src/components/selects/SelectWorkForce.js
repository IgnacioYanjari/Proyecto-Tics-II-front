import React, {Component} from "react";
import shortid from "shortid";
import WorkForce from "components/modals/get/WorkForce";

class SelectWorkForce extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <WorkForce />
      </div>
    );
  }
}

export default SelectWorkForce;
