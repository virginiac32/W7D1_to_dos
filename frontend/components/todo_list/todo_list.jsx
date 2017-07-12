import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import allTodos from '../../reducers/selectors';
// import {changeTodo, demolishTodo, fetchTodos, createTodo, receiveTodo} from '../../actions/todo_actions';
import {receiveErrors} from '../../actions/error_actions';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render () {
    return(
      <div>
        <ul>
          {this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}
            demolishTodo={this.props.demolishTodo} changeTodo={this.props.changeTodo}
            receiveTodo={this.props.receiveTodo}/>)}
        </ul>
        errors: {this.props.errors.join(", ")}
        <br></br>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}

export default TodoList;
