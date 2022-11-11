import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="justify-center items-center">
        <label className='md:text-7xl sm:text-6xl text-4xl z-10 font-bold md:py-6'>
          TODO APPLICATION
        </label>
      </h2>
      <input
        type="text"
        placeholder="Enter your task"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className='flex justify-center items-center w-[200px] bg-[#00df9a] rounded-md font-medium my-6 mx-auto py-3 text-black'>
        Add
      </button>
    </form>
  );
}

export default Form;
