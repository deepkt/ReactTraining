import React from 'react'
import ReactDOM from 'react-dom'

var UserItem = React.createClass({
  selectUser: function(){
    if (this.props.onClickOfUser)
      this.props.onClickOfUser(this.props.user);
  },

  render() {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 user-item" onClick={this.selectUser}>
          <div>{this.props.user.name}</div>
          <div>{this.props.user.email}</div>
        </div>
    )
  }
});

export default UserItem
