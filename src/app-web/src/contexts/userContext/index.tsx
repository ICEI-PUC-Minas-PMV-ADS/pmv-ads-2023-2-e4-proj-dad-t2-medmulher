import { createContext, useCallback, useContext, useMemo } from "react";
import { IProvider } from "../interface";
import { IUserContext } from "./interface";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC<IProvider> = ({ children }) => {
  const loginUser = useCallback(async (email: string, password: string) => {

    return {} as any;
  }, []);

  const registerUser = async () => {
    try {
    } catch (err) {}
  };

  const redefinePasswordUser = async () => {
    try {
    } catch (err) {}
  };

  const updateUser = async () => {
    try {
    } catch (err) {}
  };

  const deleteUser = async () => {
    try {
    } catch (err) {}
  };

  const getUser = async () => {
    try {
    } catch (err) {}
  };

  const getIDUser = async () => {
    try {
    } catch (err) {}
  };

  const value = useMemo(
    () => ({
      loginUser,
    }),
    [loginUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

export const useUserContext = () => useContext(UserContext);
