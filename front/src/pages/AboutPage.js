import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="text-center mt-5">
          <h1> About Page </h1>
        </div>
      </div>
    );
  }
}

export default AboutPage;
