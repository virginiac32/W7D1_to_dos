export const todoGet = function () {
  return $.ajax({ method: 'GET', url: '/api/todos'});
};

export const addTodo = function (todo) {
  return $.ajax({method: 'POST', url: '/api/todos', data: {todo}, dataType: 'json'});
};

export const updateTodo = function (todo) {
  return $.ajax({method: 'PATCH', url: '/api/todos/'+todo.id, data: {todo}, dataType: 'json'});
};

export const deleteTodo = function (id) {
  return $.ajax({method: 'DELETE', url: '/api/todos/'+id});
};
