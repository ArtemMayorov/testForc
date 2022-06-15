import React, { useState } from 'react';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';

export default function App() {
  function creatTask(title) {
    if (title.trim().length) {
      let id = Math.floor(Math.random() * 1000);
      return {
        id: id,
        title: title,
        done: false,
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

  const [filter, setFilter] = useState('all');

  return (
    <section className="todoapp">
      <NewTaskForm taskList={taskList} setTaskList={setTaskList} creatTask={creatTask} />
      <section className="main">
        <TaskList taskList={taskList} setTaskList={setTaskList} filter={filter} />
      </section>
      <Footer taskList={taskList} setTaskList={setTaskList} filter={filter} setFilter={setFilter} />
    </section>
  );
}
