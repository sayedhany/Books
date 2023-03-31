import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
const App = () => {
  const [books, setBooks] = useState([]);
  function createBook(title) {
    console.log(`title: ${title}`);
    setBooks()
  }

  return (
    <main>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </main>
  );
};

export default App;
