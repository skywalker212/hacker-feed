import React, { Component } from 'react';
import HackerList from './HackerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HackerFeed</h1>
        </header>
        <HackerList/>
      </div>
    );
  }
}

export default App;
