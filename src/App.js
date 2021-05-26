import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header/header';

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:user' component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
