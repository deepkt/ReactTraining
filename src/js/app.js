import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';

import App      from './components/App.js'
import Home      from './components/Home.js'
import About     from './components/About.js'
import User      from './components/User.js'
import Users     from './components/Users.js'
import PageNotFound  from './components/NotFound.js'

var logger = createLogger();
var store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}>
          <Route path="user/:userid" component={User} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
