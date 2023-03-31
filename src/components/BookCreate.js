import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  }
  function handleChange(event) {
    setTitle(event.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input value={title} type="text" id="title" onChange={handleChange} />
        <button type="submit">Create!</button>
      </form>
    </>
  );
};

export default BookCreate;
