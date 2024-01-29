import React, {Component} from "react";

class Counter extends Component{

// function declare first form
// firstclick(){
//     console.log("running")

// function declare second  form
// firstclick=()=>{
//     console.log("running");
// };
state={
    counter:0
}

onIncrement=()=>{
    this.setState({
        counter :this.state.counter+1
    })
}
    onDecrement=()=>{
        this.setState({
            counter :this.state.counter-1
        })
}



    render(){
        return(
        <div>
            <h2>counter component</h2>
            {/* <button onClick={this.firstclick}>click me</button> */}
            {/* print jsx */}
            <h4>{this.state.counter}</h4>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={this.onDecrement}>-</button>



        </div>
        )
    }
}
export default Counter;