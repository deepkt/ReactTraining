import React from 'react'
import ReactDOM from 'react-dom'

var UserItem = React.createClass({
  selectUser: function(){
    if (this.props.onClickOfUser)
      this.props.onClickOfUser(this.props.user);
  },

  render() {
    return(
        <li className='user-item' onClick={this.selectUser}>
          <div>{this.props.user.name}</div>
          <div>{this.props.user.email}</div>
        </li>
    )
  }
});

export default UserItem
