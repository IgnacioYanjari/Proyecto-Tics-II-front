import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import BiddingComponent from "../components/BiddingComponent";
import OverviewComponent from "../components/OverviewComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import Material from "../components/modals/get/Material";
import Supply from "../components/modals/get/Supply";
import WorkForce from "../components/modals/get/WorkForce";
import Machine from "../components/modals/get/Machine";
import "./style.css";

class CreatePage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="row container-fluid">
          <div className="col-lg-4">
            <OverviewComponent />
            <BiddingComponent
              biddings={[
                {
                  name: "ob",
                  title: "Obra"
                },
                {
                  name: "ta",
                  title: "Tarea"
                },
                {
                  name: "ma",
                  title: "Material"
                },
                {
                  name: "mo",
                  title: "Mano de obra"
                },
                {
                  name: "eq",
                  title: "Equipo"
                },
                {
                  name: "vi",
                  title: "Viaticos"
                }
              ]}
            />
          </div>
          <div className="col-lg-8">
            <DescriptionComponent
              description={[
                {
                  name: "ma",
                  title: "Materiales",
                  content: <Material />
                },
                {
                  name: "in",
                  title: "Insumos",
                  content: <Supply />
                },
                {
                  name: "mo",
                  title: "Mano de obra",
                  content: <WorkForce />
                },
                {
                  name: "eq",
                  title: "Equipo",
                  content: <Machine />
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CreatePage;
