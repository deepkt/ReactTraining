import React from 'react'
import ReactDOM from 'react-dom'

import Greeting from './Greeting'

var data = require('../helpers/data');

var Home = React.createClass({

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
    setTimeout(this.loadData, 3000);
  },

  loadData: function (){
    this.setState({dataLoaded:true});
    this.setState({userData:data.getUsers()});
  },

  handleQueryChange: function(event){
    this.setState({query: event.target.value});
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

  mainContent: function(){
    var users = this.state.userData;
    var listOfUsers = [];
    for(var i=0; i<users.length; i++){
      if(users[i].name.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1 ||
                                this.state.query === ''){
        listOfUsers.push(
          <li>
            <div>{users[i].name}</div>
            <div>{users[i].email}</div>
          </li>
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
    return(
      <div className='home-container'>
        <h1 className='app-title'>React JS with Grunt - Training</h1>
        <input type='text' value={this.state.query} onChange={this.handleQueryChange}/>
          {this.state.query}
          {currentContent}
      </div>
    )
  }
});

export default Home
