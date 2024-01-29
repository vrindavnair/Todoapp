import React, { Component } from 'react'

 class Forms extends Component {
  clickme=()=>{
    console.log("typing..")
  }


state={
    firstname:"",
    lastname:"",
    email:""
}
clickme=(event)=>{
    //  console.log(event.target.value)
    this.setState({
        [event.target.name]:event.target.value
        

    })

}
emailfun=(event)=>{
    //  console.log(event.target.value)
    this.setState({
        [event.target.name]:event.target.value
        

    })

}
onSubmit=()=>{
    console.log(this.state)
}

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <input type='text' onChange={this.clickme} value={this.state.firstname} name="firstname" placeholder='firstname'/>   <br></br>
        <input type='text' onChange={this.clickme} value={this.state.lastname} name='lastname' placeholder='lastname'/>  <br></br> 
        <input type='email' onChange={this.emailfun} value={this.state.email} name='email' placeholder='email'/>  <br></br> 

        <button type='button' onClick={this.onSubmit}> submit</button>   
        </div>
    )
  }
}
export default Forms