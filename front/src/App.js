import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";
import LoginPage from "pages/LoginPage";
import NotFoundPage from "pages/NotFoundPage";
import ProductsPage from "pages/ProductsPage";
import TypesPage from "pages/TypesPage";
import WorkersPage from "pages/WorkersPage";
import AuthService from "services/AuthService";
import "antd/dist/antd.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <SupervisorRoute exact path="/licitaciones" component={AboutPage} />
          <AdminRoute exact path="/productos" component={ProductsPage} />
          <AdminRoute exact path="/tipos" component={TypesPage} />
          <AdminRoute exact path="/trabajadores" component={WorkersPage} />
          <Route exact path="/ingresar" component={LoginPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

function SupervisorRoute({component: Component, ...rest}) {
  let auth = new AuthService();
  return (
    <Route
      {...rest}
      render={props =>
        auth.loggedIn() && auth.isSupervisor() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/ingresar",
              state: {from: props.location}
            }}
          />
        )
      }
    />
  );
}

function AdminRoute({component: Component, ...rest}) {
  let auth = new AuthService();
  return (
    <Route
      {...rest}
      render={props =>
        auth.loggedIn() && auth.isAdmin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/ingresar",
              state: {from: props.location}
            }}
          />
        )
      }
    />
  );
}

export default App;
