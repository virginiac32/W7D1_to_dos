import React  from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import {receiveTodos,receiveTodo, removeTodo} from "./actions/todo_actions";
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  // let root=Root;
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));

  window.selectors=allTodos;
  window.receiveTodos=receiveTodos;
  window.receiveTodo=receiveTodo; 
  window.removeTodo=removeTodo;
});
