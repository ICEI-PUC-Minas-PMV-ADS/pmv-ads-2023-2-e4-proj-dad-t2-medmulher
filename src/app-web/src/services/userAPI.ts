import { AxiosResponse } from "axios";
import { apiBase } from "./api";

interface IAuth {
  auth: boolean;
  message: string;
  token: string;
}

export const loginUser = async (email: string, password: string) => {
  try {
    const response: AxiosResponse<IAuth> = await apiBase.post(
      "users/auth/login",
      {
        email,
        password,
      }
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    return {} as IAuth;
  }
};

export const getUsers = async () => {
  try {
    const response = await apiBase.get("users/");

    if (response.status === 200) {
      response.data;
    }
  } catch (err) {
    return err;
  }
};
