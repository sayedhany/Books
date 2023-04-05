import React, { useState } from "react";
import { useBooks } from "../context/books";
const BookCreate = () => {
  const { createBook } = useBooks();
  const [title, setTitle] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (title) createBook(title);
    setTitle("");
  }
  function handleChange(event) {
    setTitle(event.target.value);
  }
  return (
    <div className="book-create">
      <h3 className="header">Add new book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="input "
          value={title}
          type="text"
          id="title"
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Create!
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
