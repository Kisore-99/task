import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Navbar from './navbar/navbar';

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
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
