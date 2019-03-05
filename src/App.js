import React, { Component } from 'react';
import Heading from './components/Heading';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Heading />
          <Game />
        </div>
    );
  }
}

export default App;
