import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Navbar from './navbar/navbar';
import Card1 from './Cards/Card1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
          <Navbar />
          <Card1 />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
