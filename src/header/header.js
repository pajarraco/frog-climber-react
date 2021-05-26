import React from 'react';

import Navigation from './nav';

import logo from '../assets/logo.svg';
import './header.css';

function Header() {
  return (
    <header className="App-header">
      <Navigation></Navigation>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
    </a>
    </header>
  );
}

export default Header;