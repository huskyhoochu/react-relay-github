import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'animate.css/animate.css';

import App from './App';
import './Index.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/:login" children={<App />} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
