import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IUserContext, IProvider } from "./interface";
import { IAddress, IUser } from "../../ui/interfaces";
import { getDoctors } from "../../services/api";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC<IProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [address, setAddress] = useState<IAddress>();
  const [doctorList, setDoctorList] = useState<any[]>();
  const [doctorSpecialty, setDoctorSpecialty] = useState<any[]>();

  const doct = async () => {
    const response: Array<any> = await getDoctors();
    const special = response.map((el) => el.specialty.toUpperCase());
    const data = special.filter((este, i) => special.indexOf(este) === i);
    const spc = data.map((el) => {
      return {
        label: el.toLowerCase(),
        value: el.toLowerCase(),
      };
    });
    setDoctorSpecialty(spc);
    setDoctorList(response);

    return;
  };

  useEffect(() => {
    doct();
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      address,
      setAddress,
      doctorList,
      setDoctorList,
      doctorSpecialty,
      setDoctorSpecialty,
    }),
    [
      user,
      setUser,
      address,
      setAddress,
      doctorList,
      setDoctorList,
      doctorSpecialty,
      setDoctorSpecialty,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

export const useUserContext = () => useContext(UserContext);
