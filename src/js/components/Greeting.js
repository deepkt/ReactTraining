import React from 'react'
import ReactDOM from 'react-dom'

var Greeting = React.createClass({

  render() {
    return(
      <div className='app-title'>
        This is new component - Hello {this.props.username}
      </div>
    )
  }
});

export default Greeting
