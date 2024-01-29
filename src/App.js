import React,{Component} from 'react';
import './App.css';
// import Todo from "./component/Todo";
// import Counter from './component/counter';
// import Forms from './component/forms';
// import Uncontrolled from './component/uncontrolledmodel';
import List from './component/list';


// function App() {
//   return (
//     <div className="App">
//      <h1>welcome</h1>
//     </div>
//   );
// }
class App extends Component{
  state={
    myString:"hello",
    myString1:"debug"
  }

  f1=()=>{
    this.setState({
      myString:"nidheesh"
    })
  }

  
  render(){
    return(
      <div className="App">
     {/* <h1>welcome</h1>
     <h1>{this.state.myString}</h1>
     <h1>{this.state.myString1}</h1>
     <button onClick={this.f1}>change item</button> */}
     {/* props used inside todo tag */}
     {/* <Todo myString={this.state.myString}/>   */}
     {/* <Counter/> */}
     {/* <Forms/> */}
     {/* <Uncontrolled/> */}
     <List/>


    </div>

    )
  }
}

export default App;
