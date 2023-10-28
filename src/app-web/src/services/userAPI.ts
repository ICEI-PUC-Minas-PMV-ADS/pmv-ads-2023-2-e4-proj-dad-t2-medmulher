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

export const resetPassword = async (email: string, newPassword: string) => {
  try {
    // Verifique se o email do usuário existe
    const checkUserResponse: AxiosResponse = await apiBase.get(
      `users/email/${email}`
    );

    if (checkUserResponse.status === 200) {
      // Se o email existir, faça uma solicitação para redefinir a senha
      const updatePasswordResponse: AxiosResponse = await apiBase.patch(
        `users/${checkUserResponse.data.userID}/new-password`,
        { password: newPassword }
      );

      if (updatePasswordResponse.status === 200) {
        return { auth: true, message: "Senha redefinida com sucesso!" };
      } else {
        return { auth: false, message: "Erro ao redefinir a senha" };
      }
    } else {
      return { auth: false, message: "Usuário não cadastrado!" };
    }
  } catch (error) {
    return { auth: false, message: "Erro ao redefinir a senha" };
  }
};

export const registrar = async (
  email: string,
  password: string,
  name: string,
  cpf: string
) => {
  try {
    const response: AxiosResponse<IAuth> = await apiBase.post("users/", {
      name,
      email,
      password,
      cpf,
    });

    if (response.status === 200) {
      alert("Usuário cadastrado!");
      console.log(response.data.message);
      return response.data;
    }
  } catch (err) {
    return {} as IAuth;
  }
};
