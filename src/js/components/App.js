import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { PageHeader} from 'react-bootstrap'

var App = React.createClass({

  render() {
    return(
      <div className='app-container'>
        <div className='app-bar'>
          <PageHeader>React JS with Grunt <small>Training</small></PageHeader>
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
