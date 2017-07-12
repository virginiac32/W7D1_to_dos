import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors';
import {receiveTodo, removeTodo, fetchTodos, createTodo, demolishTodo, changeTodo} from '../../actions/todo_actions';
import {receiveErrors} from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  demolishTodo: (todo) => dispatch(demolishTodo(todo)),
  changeTodo: (todo) => dispatch(changeTodo(todo)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
