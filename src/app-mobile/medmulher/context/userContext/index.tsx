import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IUserContext, IProvider } from "./interface";
import { AxiosResponse } from "axios";
import { IAddress, IUser } from "../../ui/interfaces";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC<IProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [address, setAddress] = useState<IAddress>();

  const value = useMemo(
    () => ({
      user,
      setUser,
      address,
      setAddress,
    }),
    [user, setUser, address, setAddress]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

export const useUserContext = () => useContext(UserContext);
