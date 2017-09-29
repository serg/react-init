import React from 'react';

import reactLogo from '../img/react-logo.png';

export class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>Hello, React!</h1>
        <img src={reactLogo} width="300" height="300" alt="React logo"/>
      </div>
    );
  }
}
