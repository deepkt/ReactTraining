import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { PageHeader} from 'react-bootstrap'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


var Header = React.createClass({

  renderFriendsCount: function(){
    return(
      <span>
        {this.props.friends}
      </span>
    );
  },

  render() {
    var friendsCount = this.props.friends ? this.renderFriendsCount():null;
    // var friendsCount = this.renderFriendsCount();
    return(
      <div className='app-container'>
        <div className='app-bar'>
          <PageHeader>React JS with Grunt <small>Training</small></PageHeader>
            <ul role="nav">
              <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
              <li><Link to="/users" activeStyle={{ color: 'red' }}>Users</Link></li>
              <li>Friends: {friendsCount}</li>
            </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
});

function mapStateToProps(state) {
  console.log(state.friends.length);
    return {
        friends: state.friends.length
    };
}
export default connect(mapStateToProps)(Header);
