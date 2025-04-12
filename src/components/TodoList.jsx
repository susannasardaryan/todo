import Todo from "./ToDo";

const TodoList = ({todos, onTodoItemCheckboxClick, onTodoItemEdit, onTodoItemDelete}) => {
  return(
    <div className="todoList">
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onEdit={onTodoItemEdit}
        onDelete={onTodoItemDelete}
        onCheckboxClick={onTodoItemCheckboxClick}
      ></Todo>
    ))}
  </div>
  )
}

export default TodoList;