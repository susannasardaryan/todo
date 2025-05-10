const TodoTabSection = ({handleActiveTabChange, activeTab}) => {

  return (
    <section className="tabs">
      <li
        onClick={handleActiveTabChange}
        className={activeTab === "All" ? "active" : ""}
      >
        All
      </li>
      <li
        onClick={handleActiveTabChange}
        className={activeTab === "Completed" ? "active" : ""}
      >
        Completed
      </li>
      <li
        onClick={handleActiveTabChange}
        className={activeTab === "To do" ? "active" : ""}
      >
        To do
      </li>
    </section>
  );
};

export default TodoTabSection;