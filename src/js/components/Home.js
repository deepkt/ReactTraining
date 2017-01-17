import React from 'react'
import ReactDOM from 'react-dom'

// var Greeting = require('./Greeting');
import Greeting from './Greeting'
var Home = React.createClass({

  getInitialState: function () {
    return{
      user: ''
    }
  },

  handleNameChange: function(event){
    // console.log(userData.getUsers());
    this.setState({user: event.target.value});
  },

  sayHello: function () {
    return(
      <div className='app-title'>
        This is Inline(sayHello1) component - Ola {this.state.user}
      </div>
    )
  },

  render() {
    return(
      <div className='home-container'>
        <h1 className='app-title'>React JS with Grunt - Training</h1>
        <input type='text' value={this.state.user} onChange={this.handleNameChange}/>
        <Greeting username={this.state.user}/>
        {this.sayHello()}
      </div>
    )
  }
});

export default Home
