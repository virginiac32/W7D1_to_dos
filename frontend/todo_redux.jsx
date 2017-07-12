import React  from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import {receiveTodos,receiveTodo, removeTodo,fetchTodos} from "./actions/todo_actions";
import Root from './components/root';

// import { todoGet } from './util/todo_api_util';
// import thunkMiddleware from '../middlware/thunk';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  // let root=Root;
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));

  window.selectors=allTodos;
  window.receiveTodos=receiveTodos;
  window.receiveTodo=receiveTodo;
  window.removeTodo=removeTodo;
  window.fetchTodos = fetchTodos;
  // window.thunkMiddleware = thunkMiddleware;
});
