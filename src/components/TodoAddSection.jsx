import { useRef } from "react";

const TodoAddSection = ({ addTodo }) => {
  let addedInputValueRef = useRef("");

  const handleAddButtonClick = () => {
    addTodo(addedInputValueRef.current?.value);
    addedInputValueRef.current.value = "";
  };

  return (
    <div className="addValue">
      <input
        ref={addedInputValueRef}
        type="text"
        placeholder="What you have to do"
      />
      <button onClick={handleAddButtonClick} className="defaultButton addButton">Add</button>
    </div>
  );
};

export default TodoAddSection;
