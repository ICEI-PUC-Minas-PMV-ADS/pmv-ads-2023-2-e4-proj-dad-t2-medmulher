import { createContext, useContext } from "react";
import { IProvider } from "../interface";

const SchedulleContext = createContext({});

export const SchedulleProvider: React.FC<IProvider> = ({ children }) => {
  const value = "";
  return (
    <SchedulleContext.Provider value={value}>
      {children}
    </SchedulleContext.Provider>
  );
};

export default SchedulleContext;

export const useSchedulleContext = () => useContext(SchedulleContext);