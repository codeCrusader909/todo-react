import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {

  render() {
    const {todos, remove} = this.props
    return (
      <div className="list">
        {/* Render the todo here from the props*/
          todos.map((todo, index)=>(
            <Todo todo={todo} remove={remove} index={index} />
          ))
        }
      </div>
    );
  }
}
