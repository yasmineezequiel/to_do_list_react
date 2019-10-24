import React from 'react';
import './todoInput.css'

export default class Todo extends React.Component {
  constructor(props){
  super(props)

  this.state = {value: "test"};

  this.handleChange = this.handleChange.bind(this);
  this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    if (todo.lenght > 0)
    this.props.addTodo(todo);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
    );
  };
};