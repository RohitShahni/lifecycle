
import React,{Component} from "react";

class Counter  extends Component {

    componentDidUpdate(prevprops,prevState){
        console.log(prevprops.number)
        console.log(this.props.number)

if(prevprops.number!==this.props.number){
    console.log('componentDidUpdate: Component Updated')
}
    }

    render(){
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}

export default Counter;