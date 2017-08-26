import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'
import './styles/App.css';
import {routes} from './Routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="main-content">
            {routes}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
