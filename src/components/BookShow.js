import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  function handleSubmit(id, title) {
    onEdit(id, title);
    setShowEdit(false);
  }
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit handleSubmit={handleSubmit} book={book} />;
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
