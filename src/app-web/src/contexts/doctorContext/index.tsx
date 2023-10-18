import { createContext, useContext } from "react";
import { IProvider } from "../interface";

const DoctorContext = createContext({});

export const DoctorProvider: React.FC<IProvider> = ({ children }) => {
  const value = "";
  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;

export const useDoctorContext = () => useContext(DoctorContext);