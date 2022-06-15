import React, { useState } from 'react';

export default function NewTaskForm({ taskList, setTaskList, creatTask }) {
  const [searcValue, setSearchValue] = useState('');

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function addTask(e) {
    if (e.key === 'Enter' && searcValue.trim().length) {
      setTaskList([...taskList, creatTask(searcValue)]);
      setSearchValue('');
      e.target.value = '';
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>

      <input
        className="new-todo"
        onChange={handleSearchValue}
        onKeyDown={addTask}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}
