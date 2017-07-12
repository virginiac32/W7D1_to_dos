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

  demolishTodo(event) {
    event.preventDefault();
    this.props.demolishTodo(this.props.todo.id);
  }

  isDone() {
    return this.props.todo.done === true ? "Undo" : "Done";
  }

  changeTodo(event) {
    event.preventDefault();
    let done = this.props.todo.done ? false : true;
    this.props.changeTodo({id: this.props.todo.id, done: done});
  }

  toggleDetailView(event) {
    event.preventDefault();
    let detail = this.props.todo.detail ? false : true;
    this.props.receiveTodo({id: this.props.todo.id, detail: detail});
  }

  fetchDetail(){
    // console.log("details shown");
    if(this.props.todo.detail)
    {
      return this.props.todo.body;
    }
    return "";
  }

  render(){
    return (
      <li><span onClick={this.toggleDetailView.bind(this)}>{this.props.todo.title}</span>
        <button onClick={this.demolishTodo.bind(this)}>Delete</button>
        <button onClick={this.changeTodo.bind(this)}>{this.isDone()}</button>
        <br></br>
        <text>{this.fetchDetail()}</text>
      </li>
    );
  }
}

export default TodoListItem;
