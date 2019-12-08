import React from 'react';
import { Provider } from 'react-redux';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import ArrivalShowContainer from './arrivals/arrival_container';

const App = () => (
  <div>
    <header>
    </header>

    <Switch>
      <Route exact path='/' component={ArrivalShowContainer} />
    </Switch>
  </div>
);

export default App;
