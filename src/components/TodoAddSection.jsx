import { useRef } from "react";

const TodoAddSection = ({ addTodo }) => {
  let addedInputValueRef = useRef("");

  const handleAddButtonClick = () => {
    addTodo(addedInputValueRef.current?.value);
    addedInputValueRef.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) handleAddButtonClick();
  };

  return (
    <div className="addValue">
      <input
        ref={addedInputValueRef}
        type="text"
        placeholder="What you have to do"
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAddButtonClick}
        className="defaultButton addButton"
      >
        Add
      </button>
    </div>
  );
};

export default TodoAddSection;
