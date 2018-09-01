import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage}/>
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
