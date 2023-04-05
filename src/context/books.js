import { createContext, useState, useEffect } from "react";
import axios from "axios";
const initState = {
  books: [],
  editBookById: () => {},
  deleteBookById: () => {},
  createBook: () => {},
};
const url = "http://localhost:3001/books";
const BookContext = createContext(initState);

function Provider({ children }) {
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
    <BookContext.Provider
      value={{
        books,
        editBookById,
        deleteBookById,
        createBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
export { Provider };
export default BookContext;
