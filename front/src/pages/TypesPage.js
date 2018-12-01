import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import AdminLinks from "components/AdminLinks";
import ClientComponent from "components/types/ClientComponent";
import TenderComponent from "components/types/TenderComponent";
import WorkComponent from "components/types/WorkComponent";
import WorkForceComponent from "components/types/WorkForceComponent";
import MachineComponent from "components/types/MachineComponent";
import MaterialComponent from "components/types/MaterialComponent";
import SupplyComponent from "components/types/SupplyComponent";

const links = [
  {
    name: "Productos",
    url: "/productos"
  },
  {
    name: "Trabajadores",
    url: "/trabajadores"
  }
];

class TypesPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <AdminLinks links={links} />
        <div className="text-center mt-3 container">
          <ClientComponent />
          <TenderComponent />
          <WorkComponent />
          <WorkForceComponent />
          <MachineComponent />
          <MaterialComponent />
          <SupplyComponent />
        </div>
      </div>
    );
  }
}

export default TypesPage;
