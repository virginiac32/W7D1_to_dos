import React from 'react';

class TodoDetailView extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    let body = '';
    if (this.props.todo.detail) {
      body = this.props.todo.body;
    }
    return (
      <div>{body}</div>
    );
  }
}

export default TodoDetailView;
