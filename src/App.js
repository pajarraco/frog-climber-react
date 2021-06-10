import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';

import HomePage from './pages/home_page';
import UserPage from './pages/user_page';


import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:user' component={UserPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
