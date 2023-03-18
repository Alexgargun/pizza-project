import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item");
    }
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          value={title}
          placeholder="Add Task"
          onChange={handleInput}
        />

        <button className="input-submit" type="submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="input-warning">{message}</span>
    </>
  );
};

export default InputTodo;
