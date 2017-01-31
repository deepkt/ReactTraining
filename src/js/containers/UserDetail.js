import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap'
import {addToFriends} from '../actions/user'
import {bindActionCreators} from 'redux';

var UserDetail = React.createClass({

  render() {
    if (!this.props.user) {
      return ( < div > Select a user... < /div>);
    }

    return(
      <div className='user-detail-container'>
        <h1 className='app-title'>{this.props.user.name}</h1>
        {this.props.user.email}
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small" onClick={() => this.props.addToFriends(this.props.user)}>Add as Friend</Button>
        </ButtonToolbar>
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToFriends: addToFriends}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
