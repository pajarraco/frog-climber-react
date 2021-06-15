import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';

import HomePage from './pages/home/home_page';
import UserPage from './pages/user/user_page';
import FollowPage from './pages/follow/follow_page';


import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/users/:user' component={UserPage} />
        <Route exact path='/follow' component={FollowPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
