import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';

class MainPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="text-center mt-5">
          <h1> Home Page </h1>
        </div>
      </div>
    );
  }
}

export default MainPage;
