import React, { useEffect, useState, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import BookContext from "./context/books";
const url = "http://localhost:3001/books";
const App = () => {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const { data } = await axios.get(url);
    setBooks(data);
  }
  useEffect(() => {
    fetchBooks();
  }, []);
  async function editBookById(id, title) {
    const { data } = await axios.put(`${url}/${id}`, {
      title,
    });
    console.log(data);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...data };
      }
      return book;
    });
    setBooks(updatedBooks);
  }
  async function deleteBookById(id) {
    await axios.delete(`${url}/${id}`);
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  }
  async function createBook(title) {
    const { data } = await axios.post(url, {
      title,
    });
    // console.log(data);
    const updatedBooks = [...books, data];
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
