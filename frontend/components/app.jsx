import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

class App extends React.Component {
  render () {
    return(
      <h1>
        <TodoListContainer/>
      </h1>
    );
  }
}

export default App;
