import React from 'react';

import Task from '../Task/Task';

export default function TaskList({ taskList, setTaskList, filter }) {
  /* Меняем/Редактируем/Делаем задачу выполненной в поле Task */
  function editTask(elem, titleText = false, editState = false) {
    const idx = taskList.findIndex((element) => {
      return element.id === elem.id;
    });
    const stateDone = editState ? elem.done : !elem.done;
    const result = {
      ...elem,
      title: titleText ? titleText : elem.title,
      done: stateDone,
    };
    setTaskList([...taskList.slice(0, idx), result, ...taskList.slice(idx + 1)]);
  }

  /* Удаляем поле в Task*/
  function deleteTask(elem) {
    const idx = taskList.findIndex((element) => {
      return element.id === elem.id;
    });

    setTaskList([...taskList.slice(0, idx), ...taskList.slice(idx + 1)]);
  }

  const filtertaskList = taskList.filter((elem) => {
    if (filter === 'all') return elem;
    if (!elem.done && filter === 'active') return elem;
    if (elem.done && filter === 'completed') return elem;
  });

  return (
    <ul className="todo-list">
      {filtertaskList.map((elem) => {
        return <Task key={elem.id} elementTask={elem} editTask={editTask} deleteTask={deleteTask} />;
      })}
    </ul>
  );
}
