import React, { useState } from "react";

export default function Task({ elementTotdoList, editListItem, delListItem }) {
  const [taskText, setTask] = useState(elementTotdoList.title);
  function editTaskBtn(e) {
    editListItem(elementTotdoList, e);
  }

  function editTaskDone(e) {
    if (e.key === "Enter") {
      editListItem(elementTotdoList, e, "editing");
    }
  }

  function delItem() {
    delListItem(elementTotdoList);
  }

  function taskDone(e) {
    editListItem(elementTotdoList, e, "completed");
  }

  return (
    <li key={elementTotdoList.id} className={elementTotdoList.status}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={taskDone}
          checked={elementTotdoList.stateList}
        ></input>
        <label>
          <span className="description">{elementTotdoList.title}</span>
          <span className="created">created 5 seconds ago</span>
        </label>
        <button className="icon icon-edit" onClick={editTaskBtn}></button>
        <button className="icon icon-destroy" onClick={delItem}></button>
      </div>

      {elementTotdoList.status === "editing" ? (
        <input
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyUp={editTaskDone}
          value={taskText}
          className="edit"
          autoFocus
        ></input>
      ) : (
        ""
      )}
    </li>
  );
}
