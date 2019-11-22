import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import New from './New';
import './style.css';

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
      <New /> 
      <Hello/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
