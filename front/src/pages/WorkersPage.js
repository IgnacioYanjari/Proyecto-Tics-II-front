import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import AdminLinks from "components/AdminLinks";
import WorkerComponent from "components/workers/WorkerComponent";

const links = [
  {
    name: "Productos",
    url: "/productos"
  },
  {
    name: "Tipos",
    url: "/tipos"
  }
];

class WorkersPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="row container-fluid">
          <div className="col-3">
            <AdminLinks links={links} />
          </div>
          <div className="col-9 text-center mt-3 container scroll">
            <WorkerComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkersPage;
