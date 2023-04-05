import React, {  useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import  { useBooks } from "./context/books";
const App = () => {
  const { fetchBooks } = useBooks();
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <main className="app">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </main>
  );
};

export default App;
