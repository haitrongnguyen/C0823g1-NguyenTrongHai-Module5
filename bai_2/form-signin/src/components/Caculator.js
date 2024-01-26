import { Component } from "react";

class Caculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1 : 0,
            num2 : 0,
            resust : 0
        }
    }
    
    handelNum1(value){
        console.log(value);
        this.setState({
            num1: parseInt(value)
        })
    }
    handelNum2(value){
        console.log(value);
        this.setState({
            num2: parseInt(value)
        })
    }
    add(){
        this.setState(()=>({
            resust : this.state.num1 + this.state.num2,
            num1 : 0,
            num2 : 0
        }))
    }
    sub(){
        this.setState(()=>({
            resust : this.state.num1 - this.state.num2,
            num1 : 0,
            num2 : 0
        }))
    }
    mul(){
        this.setState(()=>({
            resust : this.state.num1 * this.state.num2,
            num1 : 0,
            num2 : 0
        }))
    }
    div(){
        this.setState(()=>({
            resust : this.state.num1 / this.state.num2,
            num1 : 0,
            num2 : 0
        }))
    }
    render(){
        return(
            <>
            <input type="number" value={this.state.num1} placeholder="num1" onChange={(event)=> this.handelNum1(event.target.value)}></input>
            <input type="number" value={this.state.num2} placeholder="num2" onChange={(event)=> this.handelNum2(event.target.value)}></input>
            <button onClick={()=> this.add()}>+</button>
            <button onClick={()=> this.sub()}>-</button>
            <button onClick={()=> this.mul()}>*</button>
            <button onClick={()=> this.div()}>/</button>
            <p>Kết quả: {this.state.resust}</p>
            </>
        )
    }
}
export default Caculator;