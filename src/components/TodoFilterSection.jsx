const TodFilterSection = ({onHandleFilterValue, inputFilterValue}) => {
  return (
    <div className="filterValue">
      <input
        type="text"
        onChange={onHandleFilterValue}
        id="filterInput"
        value={inputFilterValue}
        placeholder="Filter Value"
      />
      {/* <button className="defaultButton addButton" onClick={}>Filter</button> */}
    </div>
  );
};

export default TodFilterSection;
