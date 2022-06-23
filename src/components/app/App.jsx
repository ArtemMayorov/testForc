import React, { useState } from 'react';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';

export default function App() {
  function creatTask(title, time = 10000) {
    if (title.trim().length) {
      const id = Math.floor(Math.random() * 1000);
      const creatDate = new Date();
      return {
        id: id,
        title,
        done: false,
        time,
        creatDate,
      };
    }
    return null;
  }

  const [taskList, setTaskList] = useState([
    creatTask('1'),
    creatTask('2'),
    creatTask('3'),
    creatTask('4'),
    creatTask('5'),
  ]);

  const updateTimer = (elementId, time) => {
    setTaskList((tasks) => {
      const idx = taskList.findIndex((task) => task.id === elementId);
      return [...tasks.slice(0, idx), { ...tasks[idx], time }, ...tasks.slice(idx + 1)];
    });
  };

  const [filter, setFilter] = useState('all');

  return (
    <section className="todoapp">
      <NewTaskForm taskList={taskList} setTaskList={setTaskList} creatTask={creatTask} />
      <section className="main">
        <TaskList taskList={taskList} setTaskList={setTaskList} filter={filter} updateTimer={updateTimer} />
      </section>
      <Footer taskList={taskList} setTaskList={setTaskList} filter={filter} setFilter={setFilter} />
    </section>
  );
}
