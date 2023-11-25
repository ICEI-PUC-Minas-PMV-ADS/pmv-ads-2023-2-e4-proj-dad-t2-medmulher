import { IAddress, IUser } from "../../ui/interfaces";

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
  doctorList: any[];
  setDoctorList: React.Dispatch<React.SetStateAction<any[]>>;
  doctorSpecialty: any[]; 
  setDoctorSpecialty: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface IProvider {
  children: React.ReactNode;
}
