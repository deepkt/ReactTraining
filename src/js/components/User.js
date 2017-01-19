import React from 'react'
import ReactDOM from 'react-dom'

var User = React.createClass({

  render() {
    return(
      <div className='app-title'>
        User - {this.props.params.userid}
      </div>
    )
  }
});

export default User
