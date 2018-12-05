import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import BiddingComponent from "../components/BiddingComponent";
import OverviewComponent from "../components/OverviewComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import SelectMachine from "../components/selects/SelectMachine";
import SelectSupply from "../components/selects/SelectSupply";
import SelectMaterial from "../components/selects/SelectMaterial";
import SelectWorkForce from "../components/selects/SelectWorkForce";
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
                  content: <SelectMaterial />
                },
                {
                  name: "in",
                  title: "Insumos",
                  content: <SelectSupply />
                },
                {
                  name: "mo",
                  title: "Mano de obra",
                  content: <SelectWorkForce />
                },
                {
                  name: "eq",
                  title: "Equipo",
                  content: <SelectMachine />
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
