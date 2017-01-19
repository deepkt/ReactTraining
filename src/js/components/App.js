import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

var App = React.createClass({

  render() {
    return(
      <div className='app-container'>
        <div className='app-bar'>
          <h1 className='app-title'>React JS with Grunt - Training</h1>
            <ul role="nav">
              <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
              <li><Link to="/users" activeStyle={{ color: 'red' }}>Users</Link></li>
            </ul>
        </div>
        {this.props.children}
        <div>Copyright</div>
      </div>
    )
  }
});

export default App
