import { createContext } from "react";
const initState = {
  books: [],
};
const BookContext = createContext(initState);

function Provider({ children }) {
  return <BookContext.Provider value={2}>{children}</BookContext.Provider>;
}
export { Provider };
export default BookContext;
