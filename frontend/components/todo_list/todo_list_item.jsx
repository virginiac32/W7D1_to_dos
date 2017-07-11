import React from 'react';
import TodoDetailView from './todo_detail_view';

// const TodoListItem = ({todo})=>{
//   return(
//     <li>{todo.title}</li>
//   );
// };

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  isDone() {
    return this.props.todo.done === true ? "Undo" : "Done";
  }

  updateTodo(event) {
    event.preventDefault();
    let done = this.props.todo.done ? false : true;
    this.props.receiveTodo({id: this.props.todo.id, done: done});
  }

  toggleDetailView(event) {
    event.preventDefault();
    let detail = this.props.todo.detail ? false : true;
    this.props.receiveTodo({id: this.props.todo.id, detail: detail});
  }

  render(){
    return (
      <li><span onClick={this.toggleDetailView.bind(this)}>{this.props.todo.title}</span>
        <button onClick={this.removeTodo.bind(this)}>Delete</button>
        <button onClick={this.updateTodo.bind(this)}>{this.isDone()}</button>
        <br></br>
      </li>
    );
  }
}

export default TodoListItem;
