import React,{Component} from 'react';

class Myclass extends Component{

  constructor(){
    super()
    this.state={
      message:"Hello"
    }

    this.handleClick=this.handleClick.bind(this)
  }

 handleClick(){
     this.setState({
       message:"Good Bye!"
     })
  }
// handleClick=()=>{
//   this.setState({
//     message:"Good Bye !"
//   })
// }
  render(){
    return(
      <>
      <div>{this.state.message} </div>
    {/* <button onClick={this.handleClick.bind(this)}>click </button> */}
    {/* <button onClick={()=>this.handleClick()}>click </button> */}
    <button onClick={this.handleClick}>click </button>
    </>
    );
  }
}

export default Myclass;