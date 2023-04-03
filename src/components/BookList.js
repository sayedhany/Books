import React from "react";
import BookShow from "./BookShow";
const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} book={book} key={book.id} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
