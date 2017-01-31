import React from 'react'
import ReactDOM from 'react-dom'

import UserItem from '../components/userItem'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/user'

var data = require('../helpers/data');

var UsersList = React.createClass({

  getInitialState: function () {
    return{
      user: '',
      dataLoaded: false,
      userData:[],
      query:''
    }
  },

  componentDidMount: function () {
    // Called when component is rendered completely
    setTimeout(this.loadData, 100);
  },

  loadData: function (){
    this.setState({dataLoaded:true});
    this.setState({userData:data.getUsers()});
  },

  handleQueryChange: function(event){
    this.setState({query: event.target.value});
  },

  // onChangeUser: function(user){
  //   this.setState({selectedUser: user});
  // },

  loadingMessage: function(){
    return(
      <div>
        Loading data....
      </div>
    );
  },

  mainContent: function(){
    var users = this.state.userData;
    var listOfUsers = [];
    for(var i=0; i<users.length; i++){
      if(users[i].name.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1 ||
                                this.state.query === ''){
        listOfUsers.push(
          // <UserItem key={i} user={users[i]} onClick = {() => this.props.selectUser(users[i])}/>
          <UserItem key={i} user={users[i]} onClickOfUser = {(user) => this.props.selectUser(user)}/>
        );
      }
    }
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {listOfUsers}
      </div>
    );
  },


  render() {
    var currentContent = this.state.dataLoaded ? this.mainContent():this.loadingMessage();
    return(
      <div className='home-container'>
        <h1 className='app-title'>Users List</h1>
        <input type='text' value={this.state.query} onChange={this.handleQueryChange}/>
          {currentContent}
          {this.props.children}
      </div>
    )
  }
});

// export default UsersList
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(null, matchDispatchToProps)(UsersList);
