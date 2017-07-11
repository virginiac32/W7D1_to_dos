import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import allTodos from '../../reducers/selectors';
import {removeTodo} from '../../actions/todo_actions';

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
