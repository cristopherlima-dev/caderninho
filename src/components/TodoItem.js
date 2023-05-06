import React from "react";

class TodoItem extends React.Component {
  render() {
    const { todo, toggleComplete, deleteTodo } = this.props;

    return (
      <div>
        <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</span>
        <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
      </div>
    );
  }
}

export default TodoItem;