import React from "react";


const Todo = (props) =>{
  return(
    <div className="">
      <div className="">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="" htmlFor={props.id}>
            {props.name}
          </label>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete
          </button>
        </div>
    </div>
  );
}

export default Todo;
