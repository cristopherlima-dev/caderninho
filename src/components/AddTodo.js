import React from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Adicionar tarefa" value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Adicionar" />
      </form>
    );
  }
}

export default AddTodo;