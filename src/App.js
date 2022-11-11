import React, { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import ToggleButton from "./components/ToggleButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";


const ToggleMap = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const ToggleNames = Object.keys(ToggleMap);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
  .filter(ToggleMap[filter])
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const filterList = ToggleNames.map(name => (
    <ToggleButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id:nanoid(), name: name, completed: false };
    console.log(newTask)
    setTasks([...tasks, newTask]);
  }
  

  return (
    <div>
      <Form className="justify-center" addTask={addTask} />
      <div className="">
        {filterList}
      </div>
      <h2>
        Tasks Remaining
      </h2>
      <ul
        role="list"
        className=""
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
