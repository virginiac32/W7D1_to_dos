import React from 'react';
import {uniqueId} from '../../util/util';
import merge from 'lodash/merge';


// const TodoForm = function(){
//   return(
//     <form>
//       <input type="text"></input>
//       <input type="text"></input>
//     </form>
//   );
// };



class TodoForm extends React.Component {

  constructor(props){
    super(props);
    this.state={title: "",body: "", id: ""};
  }

  submitForm (event) {
    event.preventDefault();
    this.props.receiveTodo({id: uniqueId(),
      title: this.state.title,
      body: this.state.body});
  }

  changeTitle (event) {
    this.setState({title: event.target.value});
  }

  changeBody (event) {
    this.setState({body: event.target.value});
  }

  render(){
    return(
      <form className="new_form">New Todo Form!
        <br></br>
        <label>Title
        <input onChange={this.changeTitle.bind(this)} id="title" type="text"></input>
        </label>
        <label>Body
        <input onChange={this.changeBody.bind(this)} id="body" type="text"></input>
        </label>
        <input type="submit" onClick={this.submitForm.bind(this)}></input>
      </form>
    );
  }
}

export default TodoForm;
