import React from 'react';

import TasksFilter from '../TasksFilter/TasksFilter';

export default function Footer({ taskList, setTaskList, filter, setFilter }) {
  function clearDoneTodos() {
    const newtaskList = taskList.filter((element) => element.done !== true);
    setTaskList([...newtaskList]);
  }
  return (
    <footer className="footer">
      <span className="todo-count">{taskList.filter((elem) => !elem.done).length} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button onClick={clearDoneTodos} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}
