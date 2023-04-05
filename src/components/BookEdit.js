import React, { useState } from "react";

const BookEdit = ({ book, handleSubmit }) => {
  const [title, setTitle] = useState(book.title);
  function handleChane(e) {
    setTitle(e.target.value);
  }

  return (
    <form
      className="book-edit"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(book.id, title);
      }}
    >
      <label htmlFor="edit">title</label>
      <input
        onChange={handleChane}
        type="text"
        name="edit"
        id="edit"
        className="input"
        value={title}
      />
      <button className="button is-primary" type="submit">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
