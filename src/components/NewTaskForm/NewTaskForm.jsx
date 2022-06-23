import React, { useState } from 'react';

export default function NewTaskForm({ taskList, setTaskList, creatTask }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskSeconds, setTaskSeconds] = useState('');
  const [taskMinuts, setTaskMinuts] = useState('');

  function changeValue(e, valueName) {
    switch (valueName) {
      case 'title':
        setTaskTitle(e.target.value);
        break;
      case 'sec':
        +e.target.value <= 59 ? setTaskSeconds(e.target.value.trim()) : null;
        break;
      case 'min':
        +e.target.value <= 59 ? setTaskMinuts(e.target.value.trim()) : null;
        break;
      default:
        break;
    }
  }

  function addTask(e) {
    if (e.key === 'Enter' && taskTitle.trim().length) {
      const time = taskMinuts * 60000 + taskSeconds * 1000;
      setTaskList([creatTask(taskTitle, time), ...taskList]);
      setTaskTitle('');
      setTaskSeconds('');
      setTaskMinuts('');
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          className="new-todo"
          onChange={(e) => {
            changeValue(e, 'title');
          }}
          onKeyDown={addTask}
          placeholder="What needs to be done?"
          value={taskTitle}
          autoFocus
        />
        <input
          type={'numer'}
          onChange={(e) => {
            changeValue(e, 'min');
          }}
          onKeyDown={addTask}
          className="new-todo-form__timer"
          placeholder="Min"
          value={taskMinuts}
          autoFocus
        ></input>
        <input
          type={'numer'}
          onChange={(e) => {
            changeValue(e, 'sec');
          }}
          onKeyDown={addTask}
          className="new-todo-form__timer"
          placeholder="Sec"
          value={taskSeconds}
          autoFocus
        ></input>
      </form>
    </header>
  );
}
