import React, { Component } from 'react';


 class Todo extends Component {
  

  render() {
    return (
      <div>
        <h1>Todo component</h1>
        <h2>{this.props.myString }</h2>
        
      </div>
    )
  }
}
export default Todo
