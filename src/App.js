import React, { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import ToggleButton from "./components/ToggleButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";


// const FILTER_MAP = {
//   All: () => true,
//   Active: task => !task.completed,
//   Completed: task => task.completed
// };

// const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  // const [filter, setFilter] = useState('All');

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
  // .filter(FILTER_MAP[filter])
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

  // const filterList = FILTER_NAMES.map(name => (
  //   <ToggleButton
  //     key={name}
  //     name={name}
  //     isPressed={name === filter}
  //     setFilter={setFilter}
  //   />
  // ));

  function addTask(name) {
    const newTask = { id:nanoid(), name: name, completed: false };
    console.log(newTask)
    setTasks([...tasks, newTask]);
  }
  

  return (
    <div>
      <Form addTask={addTask} />
      {/* <div className="filters btn-group stack-exception">
        {filterList}
      </div> */}
      <h2>
        Tasks Remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
