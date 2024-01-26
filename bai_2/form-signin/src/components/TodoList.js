import { Component, useLayoutEffect } from "react";

class ToDoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            toDoList : [],
            toDo: ""
        }
    }
    handleChange(value){
        this.setState(
            {
                toDo: value
            }
        )
    }
    handleAdd(){
        if(this.state.toDo === ""){
            this.setState((prev) => (
                {
                    toDoList: [...prev.toDoList],
                    toDo: ''
                }
            )) 
        }else{
            this.setState((prev) => (
                {
                    toDoList: [prev.toDo,...prev.toDoList],
                    toDo: ''
                }
            ))
        }
        
    }
    render(){
        return(
            <>
        <h1>To do list</h1>
        <input value={this.state.toDo} onChange={(event)=> this.handleChange(event.target.value)}></input>
        <button onClick={()=> this.handleAdd()}>Add</button>
        <ul>
            {this.state.toDoList.map((toDo,index) => (
                <li key={index}>{toDo}</li>
            ))}

        </ul>
        </>
        )
        
        
    }
}
export default ToDoApp;