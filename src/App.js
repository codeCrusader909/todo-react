import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
    this.state.todos.push({text})
    this.setState({
      todos: this.state.todos,
      text:""
    })
  };

  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    const {todos} = this.state
    const todo = todos.find((c,i) => i === index);
    if(todo){
      todos.splice(index,1)
      this.setState({
        todos: this.state.todos,
        text:""
      })
    }
    
  };
  render() {
    const {todos} = this.state
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form add={this.handleAdd} />
        <List todos={todos} remove={this.handleRemove}/>
      </div>
    );
  }
}
