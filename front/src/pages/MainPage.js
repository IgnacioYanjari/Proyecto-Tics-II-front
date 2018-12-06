import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import "./css/img.css";
import "./css/ul-align.css"
import "./css/main-icons.css"

class MainPage extends Component {

  render() {
    return (
      <div>
        <HeaderComponent />
          <img
            className="img-src"
            src={require("img/Header-LicitApp.png")}
            alt="block"
          />
        <div className="row container-fluid">
          <div className="col-7">
            <div className="card-body text-center">
              <h4 className="text-title">Problema</h4>
              <h6>
                Uso de plataformas rígidas y poco amigables, como planillas,
                afecta la usabilidad y manejo de datos sensibles comprometiéndolos.
              </h6>
            </div>
          </div>
          <div className="col-5">
            <div className="card-body text-center">
              <img
                className="main-icons"
                src={require("img/Problema.png")}
                alt="block"
              />
            </div>
          </div>
        </div>
        <hr/>
        <div className="row container-fluid">
          <div className="col-5">
            <div className="card-body text-center">
              <img
                className="main-icons"
                src={require("img/Solucion.png")}
                alt="block"
              />
            </div>
          </div>
          <div className="col-7">
            <div className="card-body text-center">
              <h4 className="text-title">Solución</h4>
              <h6>
                LicitApp se centra en recopilar todos los campos
                necesarios para realizar una perspectiva de presupuesto, para
                decidir entrar en una licitacion, a través de formularios
                que pueden ser adaptables a todo tipo de obra y tarea.
              </h6>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row container-fluid">
          <div className="col-7">
            <div className="card-body text-center">
              <h4 className="text-title">Objetivos</h4>
              <h6>
                Disminuir tiempo para calcular costos (presupuestos) para facilitar el decidir participar en licitaciones a través de una plataforma más robusta, segura y formal para la empresa.
              </h6>
            </div>
          </div>
          <div className="col-5">
            <div className="card-body text-center">
              <img
                className="main-icons"
                src={require("img/Objetivos.png")}
                alt="block"
              />
            </div>
          </div>
        </div>
        <hr/>
        <div className="row container-fluid">
          <div className="col-5">
            <div className="card-body text-center">
              <img
                className="main-icons"
                src={require("img/Tecnologia.png")}
                alt="block"
              />
            </div>
          </div>
          <div className="col-7">
            <div className="card-body text-center">
              <h4 className="text-title">Tecnología y arquitectura</h4>
              <h6 className="ul-align">
                <ul>
                  <li>Frontend: ReactJS</li>
                  <li>Backend: NodeJS</li>
                  <li>SGBD: PostgreSQL</li>
                  <li>Arquitectura: Cliente-Servidor</li>
                </ul>
              </h6>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row container-fluid">
          <div className="col-7">
            <div className="card-body text-center">
              <h4 className="text-title">Impacto</h4>
              <h6>
                Ganancia en horas hombre, pudiendo redistribuir esfuerzos,
                y disminución de errores por manejo más seguro de datos.
              </h6>
            </div>
          </div>
          <div className="col-5">
            <div className="card-body text-center">
              <img
                className="main-icons"
                src={require("img/Impactos.png")}
                alt="block"
              />
            </div>
          </div>
        </div>
        <hr/>
        <div className="row container-fluid">
          <div className="col-5">
            <div className="card-body text-center">
              <img
                className="main-icons"
                src={require("img/Futuro.png")}
                alt="block"
              />
            </div>
          </div>
          <div className="col-7">
            <div className="card-body text-center">
              <h4 className="text-title">Desarrollo futuro</h4>
              <h6>
                Base de desarrollo para futuras incorporaciones que extiendan
                la modificabilidad y adaptabilidad para distintos clientes y
                funcionalidades.
              </h6>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default MainPage;
