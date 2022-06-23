import { React, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../Timer/Timer';
import './Task.css';

export default function Task({ elementTask, editTask, deleteTask, updateTimer }) {
  const [taskText, setTask] = useState(elementTask.title);
  const [editText, setEditText] = useState(false);

  function editTaskBtn() {
    setEditText(true);
  }

  function hundleEditTaskDone(e) {
    if (e.key === 'Enter') {
      editTask(elementTask, taskText, editText);
      setEditText(false);
    }
  }

  function hundleDelItem() {
    deleteTask(elementTask);
  }

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
        <label className="task">
          <span className="title">{elementTask.title}</span>
          <Timer elementTaskId={elementTask.id} elementTaskTime={elementTask.time} updateTimer={updateTimer}></Timer>
          <span className="description">
            Created {formatDistanceToNow(elementTask.creatDate, { includeSeconds: true, addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit" onClick={editTaskBtn}></button>
        <button className="icon icon-destroy" onClick={hundleDelItem}></button>
      </div>
      {textEdited}
    </li>
  );
}
