import './style.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getQueryParams } from '../../utils';
import Home from '../components/Home';

class App extends Component {
  componentWillMount() {
    window.resizeTo(0.6 * window.screen.width, 0.6 * window.screen.height)
  }

  render() {
    return (
      <div className="App">
          <Home />
      </div>
    );
  }
}

export default connect(null, null)(App);
