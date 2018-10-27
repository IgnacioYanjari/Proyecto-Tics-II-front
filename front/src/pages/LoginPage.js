import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import LoginComponent from 'components/LoginComponent';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <LoginComponent/>
      </div>
    );
  }
}

export default LoginPage;
