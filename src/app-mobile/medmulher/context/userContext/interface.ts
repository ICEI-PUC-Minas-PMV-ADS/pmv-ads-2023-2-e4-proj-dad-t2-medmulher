import { IAddress, IUser } from "../../ui/interfaces";

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
}

export interface IProvider {
  children: React.ReactNode;
}
