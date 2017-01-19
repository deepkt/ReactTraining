import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

import App      from './components/App.js'
import Home      from './components/Home.js'
import About     from './components/About.js'
import User      from './components/User.js'
import Users     from './components/Users.js'
import PageNotFound  from './components/NotFound.js'

// ReactDOM.render( <Home /> ,
//   document.getElementById('app')
// )

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/users" component={Users}>
        <Route path="user/:userid" component={User} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
