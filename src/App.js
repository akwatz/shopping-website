import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shoppage/ShopPage.component';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
