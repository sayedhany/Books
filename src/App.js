import React from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
const App = () => {
  return (
    <main className="app">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </main>
  );
};

export default App;
