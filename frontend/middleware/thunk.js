
const thunkMiddleware = ({getState, dispatch}) => next => action => {
  // console.log(next);
  // console.log(action);
  if (typeof action === 'function') {
    return action(dispatch, getState);
  } else {
    return next(action);
  }
};

export default thunkMiddleware;
