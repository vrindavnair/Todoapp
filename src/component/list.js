import React, { Component } from 'react'
//array loop and print with map
 class List extends Component {
    state={
        data:[

            {
                id:1,
                name:"vrinda",
                age:24
            },
            {
                id:2,
                name:"nidheesh   ",
                age:24
            }
        ]
    }


  render() {
    return (
      <div>
        <h1>List</h1>
        <ul>
            {this.state.data.map((value,index)=>(
                    
                    <li key={indexas}>
                        {value.id} - {value.name}   -  {value.age}</li>
                    

                    
                
            ))}
        </ul>
        
      </div>
    )
  }
}
export default List
