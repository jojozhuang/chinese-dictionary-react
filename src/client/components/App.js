import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Dictionary from './Dictionary';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Dictionary} />
      <Route path="/dictionary" component={Dictionary} />
    </Switch>
    <Footer />
  </div>
);

export default App;
