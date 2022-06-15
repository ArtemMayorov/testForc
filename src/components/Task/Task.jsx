import React, { useState } from 'react';

export default function Task({ elementTask, editTask, deleteTask }) {
  const [taskText, setTask] = useState(elementTask.title);
  const [editText, setEditText] = useState(false);

  // статус редактирование началось
  function editTaskBtn() {
    setEditText(true);
  }

  // статус редактирование завершено
  function hundleEditTaskDone(e) {
    if (e.key === 'Enter') {
      editTask(elementTask, taskText, editText);
      setEditText(false);
    }
  }

  // статус удалено
  function hundleDelItem() {
    deleteTask(elementTask);
  }

  // статус выполнено
  function hundleTaskDone() {
    editTask(elementTask);
  }

  const textEdited = editText ? (
    <input
      type="text"
      onChange={(e) => {
        setTask(e.target.value);
      }}
      onKeyUp={hundleEditTaskDone}
      value={taskText}
      className="edit"
      autoFocus
    ></input>
  ) : null;

  const stateElement = editText ? 'editing' : elementTask.done ? 'completed' : 'view';

  return (
    <li key={elementTask.id} className={stateElement}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={hundleTaskDone} checked={elementTask.done}></input>
        <label>
          <span className="description">{elementTask.title}</span>
          <span className="created">created 5 seconds ago</span>
        </label>
        <button className="icon icon-edit" onClick={editTaskBtn}></button>
        <button className="icon icon-destroy" onClick={hundleDelItem}></button>
      </div>
      {textEdited}
    </li>
  );
}
