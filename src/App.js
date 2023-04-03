import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
const App = () => {
  const [books, setBooks] = useState([]);
  function editBookById(id, title) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  }
  function deleteBookById(id) {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  }
  function createBook(title) {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    // console.log(updatedBooks);
    setBooks(updatedBooks);
  }

  return (
    <main className="app">
      <h1>Reading list</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </main>
  );
};

export default App;
