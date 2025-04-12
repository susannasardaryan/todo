import { useState } from "react";

const Todo = ({ id, value, isDone, onEdit, onDelete, onCheckboxClick }) => {
  const [changedValue, setChangedValue] = useState(value);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSave = (id) => {
    if (id) onEdit(id, changedValue);
    setIsEditMode(!isEditMode);
  };

  const handleSaveInputChange = (e) => setChangedValue(e.target.value);

  return (
    <div className="todo">
      {isEditMode ? (
        <>
          <input type="text" onChange={handleSaveInputChange} value={changedValue} />
          <button onClick={() => handleSave(id)}>Save</button>
          <button onClick={() => handleSave()}>Cancel</button>
        </>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              onChange={() => onCheckboxClick(id)}
              checked={isDone}
            />
            <span className={isDone ? "withOverline" : ""}>{value}</span>
          </div>
          <div>
            <button onClick={() => onDelete(id)}>
              <img src="/close-24.png" />
            </button>
            <button onClick={handleEdit}>
              <img src="/edit-24.png" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
