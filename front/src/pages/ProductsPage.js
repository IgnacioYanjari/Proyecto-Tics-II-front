import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import MaterialComponent from "components/products/MaterialComponent";
import SupplyComponent from "components/products/SupplyComponent";
import MachineComponent from "components/products/MachineComponent";
import AdminLinks from "components/AdminLinks";
import "./css/vl.css"

const links = [
  {
    name: "Tipos",
    url: "/tipos"
  },
  {
    name: "Trabajadores",
    url: "/trabajadores"
  }
];

class ProductsPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="row container-fluid">
          <div className="col-3">
            <AdminLinks links={links} />
          </div>
          <div className="col-9 text-center mt-3 container scroll">
            <MaterialComponent />
            <SupplyComponent />
            <MachineComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsPage;
