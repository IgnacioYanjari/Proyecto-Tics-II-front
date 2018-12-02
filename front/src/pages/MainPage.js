import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import "./css/img.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="row container-fluid">
          <div className="col-8">
            <div className="card-body text-center">
              <h4 className="text-title">Aproximación de cotizaciones</h4>
              <h6>
                Plataforma creada para realizar cotizaciones mediante un
                funcionamiento especial, el cual consta sobre desmenusar cada
                uno de sus costos en
              </h6>
            </div>
          </div>
          <div className="col-4">
            <img
              className="mt-3 card-img-top rounded mx-auto d-block "
              src={require("img/main.jpg")}
              alt="block"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
