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

  handleNameChange(event){
    // console.log(userData.getUsers());
    this.setState({user: event.target.value});
  },

  sayHello (){
    return(
      <div className='app-title'>
        This is new component - Hello {this.props.username}
      </div>
    )
  },

  render() {
    return(
      <div className='app-title'>
        <h1>Hello</h1>
        <input type='text' value={this.state.user} onChange={this.handleNameChange}/>
        <Greeting username={this.state.user}/>
      </div>
    )
  }
});

export default Home
