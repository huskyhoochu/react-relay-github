import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'animate.css/animate.css';

import App from './App';
import Home from './Home';
import { ThemeProvider } from './context/themeContext';
import './Index.scss';

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <Switch>
        <Route path="/:login" children={<App />} />
        <Route path="/" exact={true} children={<Home />} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
