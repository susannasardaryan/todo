import { useRef, useState } from "react";
import { StorageService } from "../services/StorageService";
import { STORAGE_KEY } from "../constants/StorageKeys";

import TodoAddSection from "./TodoAddSection";
import TodoList from "./TodoList";
import TodoTabSection from "./TodoTabSection";
import TodFilterSection from "./TodoFilterSection";

const TodoContainer = () => {
  const TODO = StorageService.getItem(STORAGE_KEY) || [];

  const [todos, setTodos] = useState(TODO);
  const [activeTab, setActiveTab] = useState("All");
  let [inputFilterValue, setInputFilterValue] = useState("");

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
    const changedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          value,
        };
      }
      return todo;
    });
    setTodos(changedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markDone = (id) => {
    const changedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(changedTodos);
  };

  const saveChangesToLocalStorage = () => {
    StorageService.setItem(STORAGE_KEY, todos);
  };

  const filteredTodos = todos.filter((todo) => {
    const isIncludeFilteredValue = todo.value
      .toLowerCase()
      .includes(inputFilterValue);

    if (activeTab == "Completed") return todo.isDone && isIncludeFilteredValue;
    else if (activeTab == "To do")
      return !todo.isDone && isIncludeFilteredValue;

    return isIncludeFilteredValue;
  });

  const handleActiveTabChange = (e) => {
    setActiveTab(e.target.innerHTML);
  };

  const handleFilterValue = (e) => {
    setInputFilterValue(e.target.value);
  };

  const completed = todos.reduce((count, todo) => (count += !!todo.isDone), 0);

  return (
    <>
      <TodoTabSection
        handleActiveTabChange={handleActiveTabChange}
        activeTab={activeTab}
      />

      <div className="toolBar">
        <TodFilterSection
          onHandleFilterValue={handleFilterValue}
          inputFilterValue={inputFilterValue}
        />
        <TodoAddSection addTodo={addTodo} />
      </div>

      <TodoList
        todos={filteredTodos}
        onTodoItemEdit={handleEdit}
        onTodoItemDelete={deleteTodo}
        onTodoItemCheckboxClick={markDone}
      />

      <div className="footerPart">
        <p>{`Completed ${completed} of ${todos.length}`}</p>
        <button
          onClick={saveChangesToLocalStorage}
          className="defaultButton saveButton"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default TodoContainer;
