import React from 'react';

import TasksFilter from '../TasksFilter/TasksFilter';

export default function Footer({ totdoList, setFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{totdoList.filter((elem) => !elem.stateList).length} items left</span>
      <TasksFilter setFilter={setFilter} />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
