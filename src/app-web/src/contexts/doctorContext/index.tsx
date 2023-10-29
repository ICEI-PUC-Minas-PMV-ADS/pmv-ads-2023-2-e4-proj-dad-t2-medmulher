import { createContext, useContext, useMemo, useState } from "react";
import { IProvider } from "../interface";
import { IDoctorContext } from "./interface";

const DoctorContext = createContext<IDoctorContext>({} as IDoctorContext);

export const DoctorProvider: React.FC<IProvider> = ({ children }) => {
  const [dr, setDr] = useState<any>([]);

  const value = useMemo(
    () => ({
      dr,
      setDr,
    }),
    [dr, setDr]
  );
  return <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>;
};

export default DoctorContext;

export const useDoctorContext = () => useContext(DoctorContext);
