


const allTodos = function({todos}){
  let my_keys = Object.keys(todos);
  return my_keys.map((key) => todos[key]);
};

export default allTodos;
