import React, { Component } from 'react';
import htmlLogo from './html.png';
import reactLogo from './react.png';
import herokuLogo from './heroku.png';
import nodejsLogo from './node-js.png';
import mongodbLogo from './mongodb.png';
import expressLogo from './express.png';
import css3Logo from './css3.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={htmlLogo} alt='' />
          <img src={reactLogo} alt='' />
          <img src={herokuLogo} alt='' />
          <img src={nodejsLogo} alt='' />
          <img src={mongodbLogo} alt='' />
          <img src={expressLogo} alt='' />
          <img src={css3Logo} alt='' />
      </div>
    );
  }
}

export default App;
