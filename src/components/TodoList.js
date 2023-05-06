import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo} />
        ))}
      </div>
    );
  }
}

export default TodoList;