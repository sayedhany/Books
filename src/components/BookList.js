import React from "react";
import BookShow from "./BookShow";
import { useBooks } from "../context/books";
const BookList = () => {
  const { books } = useBooks();
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
