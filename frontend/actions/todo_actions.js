
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import { todoGet, addTodo, updateTodo, deleteTodo } from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id: id
  };
};

export const changeTodo = (thisTodo) => dispatch => {
  return updateTodo(thisTodo).then(todo => dispatch(receiveTodo(todo)),
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const demolishTodo = (id) => dispatch => {
  return deleteTodo(id).then(todo => dispatch(removeTodo(id)),
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchTodos = () => (dispatch) => {
  return todoGet().then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = (thisTodo) => dispatch => {
  return addTodo(thisTodo).then(todo => dispatch(receiveTodo(todo)),
  err => dispatch(receiveErrors(err.responseJSON)));
};
