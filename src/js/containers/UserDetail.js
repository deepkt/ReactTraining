import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';

var UserDetail = React.createClass({

  render() {
    if (!this.props.user) {
      return ( < div > Select a user... < /div>);
    }

    return(
      <div className='user-detail-container'>
        <h1 className='app-title'>{this.props.user.name}</h1>
        {this.props.user.email}
      </div>
    )
  }
});


// export default UserDetail
function mapStateToProps(state) {
    return {
        user: state.selectedUser
    };
}

export default connect(mapStateToProps)(UserDetail);
