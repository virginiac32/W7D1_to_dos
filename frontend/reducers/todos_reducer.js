import merge from 'lodash/merge';
import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_actions.js";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});
    case RECEIVE_TODOS:
      console.log(action);
      let hsh={};
      for (let i = 0; action.todos &&  i< action.todos.length; i++) {
        hsh[action.todos[i].id]=action.todos[i];
      }
      return hsh;
    case REMOVE_TODO:
      let duped = merge({},state);
      delete duped[action.id];
      return duped;
    default:
      return state;
  }
};

export default todosReducer;
