import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IBookContext, IProvider } from "./interface";
import { apiBase, postBooks } from "../../services/api";
import { IBooks } from "../../ui/interfaces";
import { AxiosResponse } from "axios";

const BookContext = createContext<IBookContext>({} as IBookContext);

export const BookProvider: React.FC<IProvider> = ({ children }) => {
  const [bookList, setBookList] = useState<IBooks[]>();
  const [mostWanted, setMostWanted] = useState<IBooks[]>();
  const [tecnology, setTecnology] = useState<IBooks[]>();
  const [selfHelp, setSelfHelp] = useState<IBooks[]>();
  const [cart, setCart] = useState<any>([]);
  const [sale, setSale] = useState<any>([]);
  const [book, setBook] = useState<IBooks>();
  const [type, setType] = useState<boolean>(true);

  const getUsers = async () => {
    try {
      const response = await apiBase.get(`users`);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      alert(error);
      return [];
    }
  };

  const updateBooksTecnology = useCallback((book: Array<IBooks>) => {
    if (book && book.length) {
      const list = book.filter(
        (book: IBooks) => book.category === "Tecnologia"
      );
      setTecnology(list);
    }
  }, []);

  const updateBooksSelfHelp = useCallback((book: Array<IBooks>) => {
    if (book && book.length) {
      const list = book.filter(
        (book: IBooks) => book.category === "auto-ajuda"
      );
      setSelfHelp(list);
    }
  }, []);

  const updateBooksMostWanted = useCallback((book: Array<IBooks>) => {
    if (book && book.length) {
      const list = book.filter(
        (book: IBooks) =>
          book.category !== "Tecnologia" && book.category !== "auto-ajuda"
      );
      setMostWanted(list);
    }
  }, []);

  const updateBooks = useCallback(async () => {
    const response = await getUsers();

    if (response) {
      setBookList(response);

      return console.log("Livros Carregados");
    }

    return console.log("Livros Em Falta :(");
  }, []);

  const getData = useCallback(() => {
    if (!bookList) {
      updateBooks();
    }
    updateBooksMostWanted(bookList);
    updateBooksSelfHelp(bookList);
    updateBooksTecnology(bookList);
  }, [bookList, updateBooks]);

  useEffect(() => {
    getData();
  }, [getData]);

  const value = useMemo(
    () => ({
      bookList,
      setBookList,
      mostWanted,
      setMostWanted,
      tecnology,
      setTecnology,
      selfHelp,
      setSelfHelp,
      updateBooksMostWanted,
      updateBooksSelfHelp,
      updateBooksTecnology,
      book,
      setBook,
      cart,
      setCart,
      sale,
      setSale,
      type,
      setType,
    }),
    [
      bookList,
      setBookList,
      mostWanted,
      setMostWanted,
      tecnology,
      setTecnology,
      selfHelp,
      setSelfHelp,
      updateBooksMostWanted,
      updateBooksSelfHelp,
      updateBooksTecnology,
      book,
      setBook,
      cart,
      setCart,
      sale,
      setSale,
      type,
      setType,
    ]
  );

  return bookList ? (
    <BookContext.Provider value={value}>{children}</BookContext.Provider>
  ) : null;
};

export default BookContext;

export const useBookContext = () => useContext(BookContext);
