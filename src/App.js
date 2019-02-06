import React, { Component } from 'react';
import htmlLogo from './html.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={htmlLogo} alt='' />
        </header>
      </div>
    );
  }
}

export default App;
