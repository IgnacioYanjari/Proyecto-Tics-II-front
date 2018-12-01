import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.css";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Perdón, Un error ha ocurrido!, La pagina a buscar no existe!!!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home" />
                  Ir a página inicial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
