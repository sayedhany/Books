import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/books";
const BookShow = ({ book,   }) => {
  const {editBookById, deleteBookById} = useContext(BookContext)
  const [showEdit, setShowEdit] = useState(false);
  function handleSubmit(id, title) {
    editBookById(id, title);
    setShowEdit(false);
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="books" />
      <div>
        {showEdit ? (
          <BookEdit handleSubmit={handleSubmit} book={book} />
        ) : (
          <h3>{book.title}</h3>
        )}
      </div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
