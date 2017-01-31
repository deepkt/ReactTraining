import React from 'react'
import ReactDOM from 'react-dom'
import UsersList from '../containers/UsersList';
import UserDetail from '../containers/UserDetail';

var User = React.createClass({

  render() {
    return(
      <div>
          <div className="col-lg-6" onClick={this.selectUser}>
            <UsersList />
          </div>
          <div className="col-lg-6">
            <UserDetail />
          </div>
      </div>
    )
  }
});

export default User
