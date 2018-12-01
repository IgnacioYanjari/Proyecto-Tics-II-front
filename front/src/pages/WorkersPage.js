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
        <AdminLinks links={links} />
        <div className="text-center mt-3 container">
          <WorkerComponent />
        </div>
      </div>
    );
  }
}

export default WorkersPage;
