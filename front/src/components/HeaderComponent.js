import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from 'services/AuthService';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { redirect: false };
  }

  handleLogout() {
    this.Auth.logout();
  }

  renderButtons() {
    if (this.Auth.loggedIn())
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/"
            onClick={this.handleLogout}>
            Cerrar sesión
            </Link>
        </li>
      )

    return (<li className="nav-item">
      <Link className="nav-link" to="/ingresar">
        Iniciar sesión
        </Link>
    </li>)
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Montajes LATAM</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"> Inicio
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/licitaciones">Licitaciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear">Crear Licitación</Link>
              <Link className="nav-link" to="/productos">Administración</Link>
            </li>
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
