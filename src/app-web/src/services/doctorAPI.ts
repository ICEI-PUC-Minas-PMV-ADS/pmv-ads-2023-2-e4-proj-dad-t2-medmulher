import { AxiosResponse } from "axios";
import { apiBase } from "./api";

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
}

export const getDoctors = async (): Promise<Doctor[]> => {
  try {
    const response: AxiosResponse<Doctor[]> = await apiBase.get('/doctors/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar médicos:', error);
    throw error;
  }
};