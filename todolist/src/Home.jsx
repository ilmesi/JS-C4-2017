import React from 'react';
import TodoList from './TodoList';

export default class Home extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      tareas: [],
      titulo: ''
    };
  }
  handleChange(event) {
    this.setState({
      titulo: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      tareas: prevState.tareas.concat({
        id: prevState.tareas.length + 1,
        titulo: prevState.titulo
      }),
      titulo: ''
    }));
  }
  render() {
    return (
      <div>
        <h1>Hola!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Ingrese una nueva tarea</label>
          <input type="text" onChange={this.handleChange} value={this.state.titulo} />
          <button type="submit">Nueva</button>
        </form>
        <TodoList tareas={this.state.tareas} />
      </div>
    )
  }
}
