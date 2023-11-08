import { IBooks } from "../../ui/interfaces";

export interface IBookContext {
  bookList: Array<IBooks>;
  setBookList: React.Dispatch<React.SetStateAction<IBooks[]>>;
  mostWanted: Array<IBooks>;
  setMostWanted: React.Dispatch<React.SetStateAction<IBooks[]>>;
  tecnology: Array<IBooks>;
  setTecnology: React.Dispatch<React.SetStateAction<IBooks[]>>;
  selfHelp: Array<IBooks>;
  setSelfHelp: React.Dispatch<React.SetStateAction<IBooks[]>>;
  book: IBooks;
  setBook: React.Dispatch<React.SetStateAction<IBooks>>;
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  sale: any[];
  setSale: React.Dispatch<React.SetStateAction<any[]>>;
  type: boolean; 
  setType: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProvider {
  children: React.ReactNode;
}
