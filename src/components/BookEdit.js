import React, { useState } from "react";

const BookEdit = () => {
  const [title, setTitle] = useState("");
  function handleChane(e) {
    setTitle(e.target.value);
  }
  return (
    <form className="book-edit">
      <label htmlFor="edit">title</label>
      <input type="text" name="edit" id="edit" className="input" />
      <button className="button is-primary" type="submit">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
