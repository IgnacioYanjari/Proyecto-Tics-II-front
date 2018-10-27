import React, { Component } from 'react';
import AuthService from 'components/AuthService';
import {Redirect} from 'react-router';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
        this.state = {
          redirect: false
        }
    }

    componentWillMount(){
      if(this.Auth.loggedIn()){
        this.setState({redirect : true});
      }
    }

    handleFormSubmit(e){
        e.preventDefault();

        this.Auth.login(this.state.username,this.state.password)
          .then(res =>{
            this.setState({redirect : true});
          })
          .catch(err =>{
              alert(err);
          })
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    renderForm(){
      return (
        <div className="text-center mt-5">
          <div className="card text-center ml-4 mr-4">
            <div className="card-header">
              <h2>Ingresar al sistema</h2>
            </div>
            <div className="card-body">
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
              <div className="form-group row">
                <div className="col-lg-12">
                  <label htmlFor="username">Usuario</label>
                </div>
                <div className="offset-lg-3 col-lg-6">
                  <input
                      id="username"
                      className="form-control"
                      autoComplete = "username"
                      placeholder = "Rut cuenta"
                      name="username"
                      type="text"
                      onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <label htmlFor="password">Contraseña</label>
                </div>
                <div className="offset-lg-3 col-lg-6">
                  <input
                      id="password"
                      className="form-control"
                      autoComplete = "new-password"
                      placeholder = "Contraseña"
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
            </div>
          </div>
        </div>
      );
    }

    render() {
        const redirect = this.state.redirect;
        if(redirect) {
          return <Redirect to="/"/>
        }
        return this.renderForm();
    }


}

export default Login;
