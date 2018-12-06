import React, {Component} from "react";
import {Link} from "react-router-dom";
import AuthService from "services/AuthService";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      redirect: false
    };
  }

  handleLogout() {
    this.Auth.logout();
  }

  renderLogin() {
    if (this.Auth.loggedIn())
      return (
        <li className="nav-item ">
          <Link className="nav-link" to="/" onClick={this.handleLogout}>
            Cerrar sesión
          </Link>
        </li>
      );

    return (
      <li className={`nav-item ${this.isActive("/ingresar")}`}>
        <Link className="nav-link" to="/ingresar">
          Iniciar sesión
        </Link>
      </li>
    );
  }

  renderAdmin() {
    if (this.Auth.isAdmin()) {
      let result = [
        this.isActive("/productos"),
        this.isActive("/tipos"),
        this.isActive("/trabajadores")
      ];
      let active = result.find(val => val === "active");
      if (!active) active = "";
      return (
        <li className={`nav-item ${active}`}>
          <Link className="nav-link" to="/productos">
            Administración
          </Link>
        </li>
      );
    }
  }

  renderSupervisor() {
    if (this.Auth.isSupervisor()) {
      return (
        <div className="row container-fluid">
          <li className={`nav-item ${this.isActive("/licitaciones")}`}>
            <Link className="nav-link" to="/licitaciones">
              Licitaciones
            </Link>
          </li>
          <li className={`nav-item ${this.isActive("/crear")}`}>
            <Link className="nav-link" to="/crear">
              Crear
            </Link>
          </li>
        </div>
      );
    }
  }

  isActive(name) {
    let path = window.location.pathname;
    let active = path === name ? "active" : "";
    return active;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          LicitApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${this.isActive("/")}`}>
              <Link className="nav-link" to="/">
                Inicio
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            {this.renderSupervisor()}
            {this.renderAdmin()}
          </ul>
          <ul className="navbar-nav ml-auto">{this.renderLogin()}</ul>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
