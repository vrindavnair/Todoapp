import React, { Component } from 'react'

class Uncontrolled extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: "",
      lastname: ""
    }
    this.inputone=React.createRef()
    this.inputtwo=React.createRef()
  }
  onSubmit=()=>{
    console.log(this.inputone.value)
    console.log(this.inputtwo.value)

  }
  render() {
    return (
      <div>
        <h2>UnControlled model</h2>
        <input type='text' name='firstname' ref={input=>this.inputone=input} value={this.state.inputone}/>
        <input type='text' name='lastnamr'  ref={input=>this.inputtwo=input} value={this.state.inputtwo}/><br/>
        <button type='button' onClick={this.onSubmit}>submit</button>


      </div>
    )
  }
}
export default Uncontrolled
