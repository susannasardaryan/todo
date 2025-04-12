import { useState } from "react";
import { StorageService } from "../services/StorageService";
import { STORAGE_KEY } from "../constants/StorageKeys";

import TodoAddSection from "./TodoAddSection";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const TODO = StorageService.getItem(STORAGE_KEY) || [];

  const [todos, setTodos] = useState(TODO);

  const generateId = Math.random();

  function addTodo(value) {
    setTodos((prev) => [
      ...prev,
      {
        id: generateId,
        value,
      },
    ]);
  }

  const handleEdit = (id, value) => {
    const changedTodos = todos.map(todo => {
        if(id === todo.id){
            return {
                ...todo,
                value
            }
        }
        return todo;
    })
    setTodos(changedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markDone = (id) => {
    const changedTodos = todos.map(todo => {
        if(id === todo.id){
            return {
                ...todo,
                isDone: !todo.isDone
            }
        }
        return todo;
    })
    setTodos(changedTodos);
  };

  function saveChangesToLocalStorage() {
    StorageService.setItem(STORAGE_KEY, todos);
  }

  return (
    <>
      <TodoAddSection addTodo={addTodo} />
      <TodoList
        todos= {todos}
        onTodoItemEdit={handleEdit}
        onTodoItemDelete={deleteTodo}
        onTodoItemCheckboxClick={markDone}
       />

      <button onClick={saveChangesToLocalStorage} className="defaultButton saveButton">
        Save
      </button>
    </>
  );
};

export default TodoContainer;
