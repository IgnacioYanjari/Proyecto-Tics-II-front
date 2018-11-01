import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect} from 'react-router';
import MainPage from 'pages/MainPage';
import AboutPage from 'pages/AboutPage';
import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import AuthService from 'components/AuthService';
import 'antd/dist/antd.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <PrivateRoute exact path="/licitaciones" component={AboutPage} />
          <Route exact path="/ingresar" component={LoginPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  let auth = new AuthService();
  return (
    <Route
      {...rest}
      render = {props =>
        auth.loggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/ingresar",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;
