import React, { Component } from 'react';
import Heading from './components/Heading';
import Board from './components/Board';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Board />
      </div>
    );
  }
}

export default App;
