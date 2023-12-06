import axios, { Axios, AxiosResponse } from "axios";
import { IAddress, IAuth, IBooks, IUser } from "../ui/interfaces";
import { Alert } from "react-native";

export const apiBase = axios.create({
  baseURL: "http://10.0.2.2:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getConsultation = async () => {
  try {
    const response = await apiBase.get(`/consultations/`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUsers = async () => {
  try {
    const response = await apiBase.get(`users`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteUsers = async (id: number) => {
  try {
    const response = await apiBase.delete(`users/${id}`);

    if (response.status >= 200 || response.status < 300) {
      return "success delete";
    }
  } catch (error) {
    return "failed request";
  }
};

export const postUsers = async (data: IUser) => {
  try {
    const response = await apiBase.post(`users/`, {
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
    });
    if (response.status >= 200 || response.status < 300) {
      return "success post";
    }
  } catch (error) {
    return "failed request";
  }
};

export const patchUsers = async (id: number, data: {}) => {
  try {
    const response = await apiBase.patch(`users/${id}`, data);

    if (response.status >= 200) {
      return "success patch";
    }
  } catch (error) {
    return "failed request";
  }
};

export const postLogin = async (data: IAuth) => {
  try {
    const response = await apiBase.post(`users/auth/login`, data);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const resetPassword = async (email: string, password: string) => {
  try {
    // Verifique se o email do usuário existe
    const checkUserResponse = await apiBase.get(`users/email/${email}`);

    if (checkUserResponse.status === 200) {
      // Se o email existir, faça uma solicitação para redefinir a senha
      const updatePasswordResponse = await apiBase.patch(
        `users/${checkUserResponse.data.userID}/new-password`,
        { password }
      );

      if (updatePasswordResponse.status === 200) {
        Alert.alert("Success", "Senha redefinida com sucesso!");
        return { auth: true, message: "Senha redefinida com sucesso!" };
      } else {
        Alert.alert("Error", "Erro ao redefinir a senha");
        return { auth: false, message: "Erro ao redefinir a senha" };
      }
    }
  } catch (error) {
    Alert.alert("Error", "Erro ao redefinir a senha");
    return { auth: false, message: "Erro ao redefinir a senha" };
  }
};

export const getDoctors = async () => {
  try {
    const response = await apiBase.get("doctors/");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export const createConsult = async (data: any) => {
  try {
    const response = await apiBase.post(`/consultations/${data.patient_id}/consult`, data);

    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    return error;
  }
}
