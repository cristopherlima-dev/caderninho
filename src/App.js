import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends React.Component {
  state = {
    todos: []
  };

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;