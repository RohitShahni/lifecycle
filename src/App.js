import React,{Component} from "react";
import Counter from "./components/Counter.js";

class App extends Component{

  constructor(){
    super();
    console.log("Constructor");
   this.state={
    count:0,
    name:'Rohit',
   }
  }





  componentDidMount(){
    console.log("componentDidMount :  when component rendered first Time");
  }
    
  increment() {
    this.setState({count:this.state.count+1})
}
  componentWillUnmount(){
    console.log("componentWillUnmount  : component removed")
  }
  
  render(){
    console.log("Render");
    return(
      <div>
        <h1>{this.state.name}</h1>
       
     <Counter number={this.state.count}/>
        <button onClick={()=>this.increment()}>Click me</button>
      </div>
    )
  }
}

export default  App;