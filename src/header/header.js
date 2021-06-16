import React from 'react';

import Navigation from './navigation/nav';

import logo from '../assets/logo_base.svg';
import './header.css';

function Header() {
  return (
    <header className="App-header">
      <Navigation />
      <img src={logo} className="App-logo" alt="logo" />
      <p className="hero-message">All About The Experience</p>
    </header>
  );
}

export default Header;