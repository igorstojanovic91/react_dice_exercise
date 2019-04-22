import React, { Component } from 'react';
import './App.css';
import RollDice from './RollDice'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RollDice />
        </header>
      </div>
    );
  }
}

export default App;
