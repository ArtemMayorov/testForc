import React from "react";

export default function TasksFilter({ setFilter }) {
  function clickFilter(e) {
    const filterChildren = [...e.currentTarget.children];
    filterChildren.map((el) => {
      return (el.firstElementChild.className = "");
    });
    e.target.classList.add("selected");
  }

  return (
    <ul onClick={clickFilter} className="filters">
      <li>
        <button
          onClick={() => setFilter({ status: "all" })}
          className="selected"
        >
          All
        </button>
      </li>
      <li>
        <button onClick={() => setFilter({ status: "active" })}>Active</button>
      </li>
      <li>
        <button onClick={() => setFilter({ status: "completed" })}>
          Completed
        </button>
      </li>
    </ul>
  );
}
