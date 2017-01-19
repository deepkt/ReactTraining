import React from 'react'
import ReactDOM from 'react-dom'

import Greeting from './Greeting'
import UserItem from './userItem'

var data = require('../helpers/data');

var Users = React.createClass({

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

  onChangeUser: function(user){
    this.setState({selectedUser: user});
  },

  sayHello: function (sayName) {
    return(
      <div className='app-title'>
        This is Inline(sayHello1) component - Ola {sayName}
      </div>
    )
  },

  loadingMessage: function(){
    return(
      <div>
        Loading data....
      </div>
    );
  },

  selectedUserContent: function(){
    return(
      <div>
        Selected User is:
        <li>Name: {this.state.selectedUser.name}</li>
        <li>Email: {this.state.selectedUser.email}</li>
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
          <UserItem key={i} user={users[i]} onClickOfUser={this.onChangeUser} />
        );
      }
    }
    return(
      <div>
        {listOfUsers}
      </div>
    );
  },

  render() {
    var currentContent = this.state.dataLoaded ? this.mainContent():this.loadingMessage();
    var showSelectedUser = this.state.selectedUser ? this.selectedUserContent():null;
    return(
      <div className='home-container'>
        <h1 className='app-title'>Users Route</h1>
        <input type='text' value={this.state.query} onChange={this.handleQueryChange}/>
          {this.state.query}
          {currentContent}
          {showSelectedUser}
          {this.props.children}
      </div>
    )
  }
});

export default Users
